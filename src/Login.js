import React from 'react'
import './Login.css'
const Login = (current,setCurrent) => {
  return (
        <form className='login-form'>
            <input placeholder='Email' type='email' required/>
            <input placeholder='Password' type='password' required/>
            <div className='remember-passowrd'>
                <input type='checkbox' />Remember password
            </div>
            <input type='submit' value='Log In' />
            <div className='info'>
              Don't have an account? Sign Up
            </div>
        </form>
  )
}

export default Login