import React from 'react';
import './signup.css';
import Input from '../Common/Input';
class Signup extends React.Component{
    state={

    }
    render() {
        return(
            
            <div>
                    <h3 className='signupheading'> Sign Up </h3>
                    <form>

                        <Input label='UserName' name='username' placeholder='UserName'/>
                        
                        <Input label='Email' name='email' placeholder='Email'/>

                        <Input label='Password' name='password' placeholder='Password'/>

                        <Input label='Confirm Password' name='confirmpassword' placeholder='Confirm Password'/>
                            
                        <button className='btn btn-primary register'> REGISTER</button>


                      
                    </form>
            </div>
        )
    }
}
export default Signup;