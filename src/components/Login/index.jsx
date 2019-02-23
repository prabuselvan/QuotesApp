import React from 'react';
import Input from '../Common/Input';
import './login.css';

class Login extends React.Component{
    render() {
        return(
            <div>
                <h1 className='loginHeading'> Login</h1>
                  <form>
                        <Input label='UserName' placeholder='Username' />
                        <Input label='Password' placeholder='Password' />
                        <button className='btn btn-primary loginbtn'> LOGIN </button>    
                  </form>  
                
            </div>
        )
    }
}
export default Login;