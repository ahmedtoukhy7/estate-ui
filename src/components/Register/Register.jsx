import React from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'
export default function Register() {
  return <>

  <div className='register'>
    <div className='form'>
        <form action="">
            <h2>Create An Account</h2>
            <input placeholder='Enter username' type="text" name='username' />
            <input placeholder='Enter email' type="text" name='email' />
            <input placeholder='Enter password' type="password" name='password' />
            <button>Register Now</button>
        </form>
            <Link to='/login'>Do yo have account</Link>
    </div>
    <div className='image'>
    <img src="/bg.png" alt="" />
    </div>
  </div>
  
  
  </>
}
