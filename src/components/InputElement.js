import React from 'react'

const InputElement = ({
    type='text',
    givenRef,
    label,
    placeholder='',
    register,
    errors,
    name=''
}) => {
  return (
    <div className='mb-2'>
        <h5>{label}</h5>
        <input className='custom-input' type={type} name={name} placeholder={placeholder} {...register(name, { required: `${label} is required`, pattern: {
        value: type=='email' && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: type=='email' && "invalid email address"
      } })}/>
        <p className='text-danger'>{errors?.[name]?.message}</p>
    </div>
  )
}

export default InputElement