import React from 'react'
import "./index.css"

const LoginPage = () => {
  return (
   
   <div className='login-box'>
    <form action="" className='login-form'>
        <h1>TRENDZ<span>PRIME</span></h1>
        <p>Enter credentials to securely connect to the store</p>
         <label htmlFor="username">USERNAME</label>
         <input type="text" name="" id="username" placeholder='Enter your name...' />
         <label htmlFor="password">PASSWORD</label>
         <input type="password" name="" id="password" placeholder='Enter your Password...' />
         <button type="button">Sign In</button>
    </form>
   </div>
  )
}

export default LoginPage
