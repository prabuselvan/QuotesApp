import React from 'react';

export const validateInput = ({name, value})=> {

    if (name=== 'email')  {
        if (value.trim()==='') {
            return 'Email is required' ;
        } 

        let  check1 = value.trim().indexOf('@');
        console.log('check1 ',check1);

        let check2= value.trim().indexOf('.com');
        console.log('check2 ', check2);

        if ( (check1 === -1) ||  (check2 === -1) ) {
            console.log('Email is invalid');
            return 'Email is invalid'
        } else {
            console.log('Email is valid');
            return 'Email is valid'
        }
        
 }

    if(name ==='password') {
        if(value.trim()==='') return 'Password is required';
        if (value.trim().indexOf('@')!== -1) return 'Password is Strong'
        if (value.trim().indexOf('@')=== -1) return 'Password is Weak'

     }
    console.log('validation');
}
