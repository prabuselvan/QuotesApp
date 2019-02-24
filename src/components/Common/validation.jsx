import React from 'react';

export const validateInput = ({name, value})=> {

    if (name=== 'email')  {
        if (value.trim()==='') {
            return 'Email is required' ;
        } 
        if (value.trim().indexOf('@') === -1) {
            return 'Email is invalid'
        } else {
            return 'Email is valid'
        }
        
 }

    if(name ==='password') {
        if(value.trim()==='') return 'Password is required';
    }
    console.log('validation');
}
// export default {
//     validateInput
// };