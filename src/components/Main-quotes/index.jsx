import React from 'react';
import {Link } from 'react-router-dom';
import './mainquotes.css';
const Mainquotes=(props)=> {
    return(

        <div>
        
            <div className='leftheading'>
            <h3 className='Mainquotes'> QUOTES APP</h3>
            </div>
            
            <div className='rightheading'>
                <li className='login'> <Link to='/login'> Login </Link>  </li>
                <li className='signup'> <Link to='/signup'> Sign Up </Link> </li>
            </div>
        </div>
    )
}

export default Mainquotes;
