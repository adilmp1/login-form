import React from 'react'
import './Signup.css'
const Signup = (current, setCurrent) => {
  return (
    <form className='sign-up-form'>
        <input className='input-pet' placeholder='First Name' type='text' required/>
        <input className='input-pet' placeholder='Last Name' type='text' required/>
        <input className='input-pet' placeholder='Email Id' type='email' required/>
        <input className='input-pet' placeholder='Password' type='password' required/>
        <input className='input-pet' placeholder='Confirm Password' type='password' required/>
        <div className='agree'>
            <input type='checkbox' required/>
            <div className='agree-text'>
                I agree to the terms and conditions
            </div>
        </div>
        <input type='submit' value='Sign Up' />
        <div className='info'>
            Already have an account? Log In
        </div>
    </form>
  )
}

export default Signup
