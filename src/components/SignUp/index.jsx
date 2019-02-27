import React from 'react';
import './signup.css';
import Input from '../Common/Input';
class Signup extends React.Component{
    state={
        signup: {
            username: '',
            email: '',
            password: '',
            confirmpassword:'',
        },
         errors: {

            },
        checker: false
    }

    validateProperty=({name , value })=>{
        console.log('value is ', value);
        const {password} = this.state.signup;
        // console.log('password is ', password);
        // console.log(name, value);
        console.log('current password is ', this.state.signup.password);
        if (name==='username') {
            if (value.trim()=== '') return 'Username is Required';
            if (value.length <6 )  { 
                return 'Username should be more than 6 characters';
            } else {
                return 'UserName is good'
            }
         }

         if (name ==='password') {
             if (value.trim() === '' ) return 'Password is required';
             if (value.length < 6 ) return 'Passsword  should be more than 6 characters';
             const  check = this.checkSpecialCharacters(value);
             if (check) return 'Password is Strong';
             else return 'Password is Weak'
         }

         if (name=== 'email') {
             if (value.trim()==='') return 'Email is required';
             if (value.length < 4 ) return 'Email should be more than 6 characters'; 
             const check = value.indexOf('@');
             if (check === -1) return 'Email is not valid'
             else  return 'Email is Valid'
         }

         if (name=== 'confirmpassword') {
             if (value.trim()==='') return 'Confirm Password should not be empty';
             console.log('password state is ', this.state.signup.password);
             console.log('confirmpassword is ', value.trim());
             if (value.trim() ===  password) return 'Confirm Password is matched';
             else return 'Confirm Password does not match'
         }

    }


    checkSpecialCharacters = (string)=> {
        // console.log(string);
        var specialCharacters = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
        for (let i=0 ; i <specialCharacters.length; i++) {
            if (string.indexOf(specialCharacters[i]) > -1) return true;
        }
    }

    onHandleChange=({target: input })=> {
        const signup = {...this.state.signup};
        const errors ={...this.state.errors};
        let checker=this.state.checker;
        // console.log(signup);
        const errorMessage = this.validateProperty(input);
        console.log(errorMessage);
        signup[input.name]=input.value;
        errors[input.name] = errorMessage;
        if (errorMessage.trim()==='UserName is good' || errorMessage.trim()=== 'Password is Strong' || errorMessage.trim() === 'Email is Valid' || errorMessage.trim()=== 'Confirm Password is matched') {
            checker= true;
        }  else {
            checker=false;
    
        }
       
        this.setState({
            signup,
            errors,
            checker
        });
    }
    render() {
        
        const {username,email,password,confirmpassword} = this.state.signup;
        const {errors, checker}  = this.state;
        return(
            
            <div>
                    <h3 className='signupheading'> Sign Up </h3>
                    <form>

                        <Input label='UserName' type='text' name='username' placeholder='UserName' onChange={this.onHandleChange} value={username} error={errors.username} successMessage={checker}/>
                        
                        <Input label='Email' type='text' name='email' placeholder='Email' onChange={this.onHandleChange} value={email}  error={errors.email} successMessage={checker}/>

                        <Input label='Password' name='password' placeholder='Password' onChange={this.onHandleChange} value={password} error={errors.password} successMessage={checker}  />

                        <Input label='Confirm Password' name='confirmpassword' placeholder='Confirm Password' onChange={this.onHandleChange} value={confirmpassword} error={errors.password} successMessage={checker}  />
                            
                        <button className='btn btn-primary register'> REGISTER</button>


                      
                    </form>
            </div>
        )
    }
}
export default Signup;