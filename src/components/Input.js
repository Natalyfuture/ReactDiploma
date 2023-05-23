import React from 'react';

export const Input = ({name, value, handleChange, handleBlur, errors, touched}) => {
    return (
        <label className='input_wrapper'> {name.toUpperCase()}
            <input 
            className='input'
            name={name}
            placeholder={`Your ${name}`}
            value={value}
            onChange={handleChange}
            type={name}
            onBlur={handleBlur}
            />
            {touched && errors ? <span className='errors'>{errors}</span> : null}
         </label>
    )
       
       
}
