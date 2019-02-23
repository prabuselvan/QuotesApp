import React from 'react';

const Input = ({label,text, placeholder, name, onChange})=> {
    return(
        <div className='form-group row '>
                <label className='col-sm-2 col-form-label ml-5'> {label} </label>
                <div className=' col-sm-4'>   
                    <input className='form-control' name={name} type={text} placeholder={placeholder} onChange={onChange}/>
                </div>
        </div>
    )
}

export default Input;