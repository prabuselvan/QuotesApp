import React from 'react';
import Input from '../Common/Input';
import {validateInput} from '../Common/validation';
import './login.css';
import fire from '../../config/Fire';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{

    state={
        account : {
            email: '',
            password: ''
        },
        errors: {
            successMessage: false
        },
        redirect: false,
        loginUserDetails: {
            isUserExists : true,
            errmessage:''
        },
      
        
    }


    onHandleChange=({target: input})=> {
        // destructuring the object is for minimising the state word usage
        // before updating the state we have to use spread operator

        const errors = {...this.state.errors};
       const Message = validateInput(input);
       if (Message!=='Email is valid' || Message!=='Password is required')  {
        errors[input.name]=Message;
       } else {
            errors[input.name]='Email is Valid';
            errors.successMessage= true;
        //    this.setState({
        //         errors
        //    });
       }
       const account= {...this.state.account};
    //    console.log(account);
       account[input.name]=[input.value];
       
       this.setState({
           account: account,
           errors:errors
       });

     }

     login=(e)=> {
        //  const {username, password} =this.state.account;
        // console.log(username[0], password[0]);
        const loginUserDetails = {...this.state.loginUserDetails};
         e.preventDefault();
         console.log('Login method')
        //  console.log(this.state.account.email[0]);
        //  console.log(this.state.account.password[0]);
        fire.auth().signInWithEmailAndPassword(this.state.account.email[0], this.state.account.password[0]).then((u)=> {
                console.log('success');
                console.log(u);
                this.setState({
                    redirect: true
                });
        }).catch((error)=> {
            console.log('error is ',error.message);
            loginUserDetails.isUserExists=false;
            loginUserDetails.errmessage=error.message;

            this.setState({
                loginUserDetails
            });
        })
     }

     redirect=()=> {
         const {redirect} = this.state;
         if (redirect)  return <Redirect to='/search'/>
     }
    
     signUp= ()=> {
         console.log('signup')
     }

    render() {
        const {email, password} = this.state.account;
        const {loginUserDetails} = this.state;
        const {errors, successMessage} = this.state;
        // console.log('isUserExists ', isUserExists);
        return(
            <div>
                <h1 className='loginHeading'> Login</h1>
                  <form onSubmit= {this.login}>
                        <Input name='email' type='text' label='Email' placeholder='Email'  onChange={this.onHandleChange} value={email}  error={errors.email} successMessage={errors.successMessage}/>
                        <Input name='password' type='password'  label='Password' placeholder='Password' onChange={this.onHandleChange} value={password} error={errors.password} successMessage={errors.successMessage}/>
                        <button className='btn btn-primary loginbtn'> LOGIN </button>  
                  </form>  
         
                  {this.redirect()}
                  {!loginUserDetails.isUserExists ? <div className='alert alert-danger col-sm-2 errorMessage'>  Invalid User Name and Password </div> : null}
                
            </div>
        )
    }
}
export default Login;