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
        // console.log(name, value);
        if (name==='username') {
            if (value.trim()=== '') return 'Username is Required';
            if (value.length <6 )  { 
                return 'Username should be more than 6 characters';
            } else {
                return 'UserName is good'
            }
         }

         if (name === 'password') {
             if (value.trim() === '' )return 'Password is required';
             if (value.length < 6 ) return 'Passsword  should be more than 6 characters'
             const  check = this.checkSpecialCharacters(value);
             if (check) return 'Password is Strong';
             else return 'Password is Weak'
         }
    }


    checkSpecialCharacters = (string)=> {
        console.log(string);
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
        if (errorMessage.trim() ==='UserName is good' || errorMessage.trim()=== 'Password is Strong') {
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

                        <Input label='UserName' name='username' placeholder='UserName' onChange={this.onHandleChange} value={username} error={errors.username} successMessage={checker}/>
                        
                        <Input label='Email' name='email' placeholder='Email' onChange={this.onHandleChange} value={email} />

                        <Input label='Password' name='password' placeholder='Password' onChange={this.onHandleChange} value={password} error={errors.password} successMessage={checker}  />

                        <Input label='Confirm Password' name='confirmpassword' placeholder='Confirm Password' onChange={this.onHandleChange} value={confirmpassword} />
                            
                        <button className='btn btn-primary register'> REGISTER</button>


                      
                    </form>
            </div>
        )
    }
}
export default Signup;