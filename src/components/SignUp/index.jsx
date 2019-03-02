import React from 'react';
import Input from '../Common/Input';
import {Link} from 'react-router-dom';
import fire from '../../config/Fire';
import {Redirect} from 'react-router-dom';
import './signup.css';

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
        checker: false,
        userRegistered: false
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
        let signup = {...this.state.signup};
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

    registration=(e)=> {
        e.preventDefault();
        console.log('registration');
        // console.log(this.state.signup.email,this.state.signup.password );
        let {username}=  this.state.signup;
        console.log('username is', username);
       fire.auth().createUserWithEmailAndPassword(this.state.signup.email,this.state.signup.password).then((u)=> {
            console.log('Success');
            console.log(u);
            this.setState({userRegistered: true,
                            username:''});
       }).catch((error)=> {
            console.log('error ', error);
            this.setState({userRegistered: false})

       })   
    }

    redirecttoLogin=(e)=>{
        return <Redirect  to='/login'/>
    }
    render() {
        
        let {username,email,password,confirmpassword} = this.state.signup;
        const {errors, checker, userRegistered}  = this.state;
        return(
            
            <div>
                    <h3 className='signupheading'> Sign Up </h3>
                    <form onSubmit={this.registration}>

                        <Input label='UserName' type='text' name='username' placeholder='UserName' onChange={this.onHandleChange} value={username} error={errors.username} successMessage={checker}/>
                        
                        <Input label='Email' type='text' name='email' placeholder='Email' onChange={this.onHandleChange} value={email}  error={errors.email} successMessage={checker}/>

                        <Input label='Password' name='password' placeholder='Password' onChange={this.onHandleChange} value={password} error={errors.password} successMessage={checker}  />

                        <Input label='Confirm Password' name='confirmpassword' placeholder='Confirm Password' onChange={this.onHandleChange} value={confirmpassword} error={errors.password} successMessage={checker}/>   
                        <button className='btn btn-primary register'> REGISTER</button>

                        {userRegistered &&  <div className=' col-sm-5 alert alert-primary ml-5'> User Registered Successfully Please Click on Login link to Continue <Link to='/login'>  Login </Link> </div>}
                      
                    </form>
            </div>
        )
    }
}
export default Signup;