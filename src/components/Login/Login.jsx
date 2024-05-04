import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import bg from '../../../public/bg.png'
export default function Login() {
  return <div className='login'>
  <div className='form'>
      <form action="">
          <h2>Login Now</h2>
         
          <input placeholder='Enter email' type="text" name='email' />
          <input placeholder='Enter password' type="password" name='password' />
          <button>Login Now</button>
      </form>
          <Link to='/register'>create account</Link>
  </div>
  <div className='image'>
  <img src={bg} alt="" />
  </div>
</div>
}
