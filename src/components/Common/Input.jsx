import React from 'react';

const Input = ({label,text, placeholder, name, onChange, value, error, successMessage})=> {
    return(
        <div className='form-group row '>
                <label className='col-sm-2 col-form-label ml-5'> {label} </label>
                <div className=' col-sm-4'>   
                    <input className='form-control' name={name} type={text} placeholder={placeholder} onChange={onChange} value={value}/>
                </div>
                {/* {error? <div className='alert alert-warning'> {error} </div> : null} */}
                {/* {isUserExists ? null : <div className='alert alert-danger'>  {errmessage} </div> } */}

                {successMessage? <div className='alert alert-success'> {error} </div> : <div className='alert alert-danger'> {error}</div>}
        </div>
    )
}

export default Input;