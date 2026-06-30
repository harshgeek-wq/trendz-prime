import React from 'react'
import "./index.css"

const LoginPage = () => {
  return (
    <div className='login-box'>
      <form action="" className='login-form'>

        <h1 className='logo'>
          TRENDZ<span>PRIME</span>
        </h1>

        <p className='login-text'>
          Enter credentials to securely connect to inventory pipelines
        </p>

        <label className='login-label' htmlFor="username">
          USERNAME
        </label>

        <input
          className='login-input'
          type="text"
          id="username"
          placeholder='Enter your name...'
        />

        <label className='login-label' htmlFor="password">
          PASSWORD
        </label>

        <input
          className='login-input'
          type="password"
          id="password"
          placeholder='Enter your Password...'
        />

        <button className='login-btn' type="button">
          Sign In
        </button>

      </form>
    </div>
  )
}

export default LoginPage