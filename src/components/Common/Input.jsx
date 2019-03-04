import React from 'react';
import propTypes from 'prop-types';

const Input = ({label,type, placeholder, name, onChange, value, error, successMessage})=> {
    // console.log('successMessage ', successMessage);
//  let colorclass='';
    return(
        <div className='form-group row '>
                <label className='col-sm-2 col-form-label ml-5'> {label} </label>
                <div className=' col-sm-4'>   
                    <input className='form-control' name={name} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
                </div>
                {/* {error? <div className='alert alert-warning'> {error} </div> : null} */}
                {/* {isUserExists ? null : <div className='alert alert-danger'>  {errmessage} </div> } */}
                
                {successMessage? <div className='alert alert-primary'> {error} </div> : <div className='alert alert-danger'> {error}</div>}
                {/* {successMessage && <div className='alert alert-danger'> {error} </div>}                 */}
        </div>
    )
}

Input.defaultProps = {
    error: 'Please enter the details',
    // colorclass:'alert alert-info'
}

export default Input;

