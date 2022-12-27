import React, { useState } from 'react'
import PropTypes from 'prop-types'

function LoginComponent ({
  authentication = () => { },
  register = () => { },
  authReducer
}) {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div>
      <div className='py-4 flex flex-row items-center justify-center gap-4'>
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Register</button>
      </div>
      {
        isLogin && (
          <div>
            <form className='flex flex-col gap-4'>
              <label>Email</label>
              <input type='text' placeholder='email' />
              <label>password</label>
              <input type="password" placeholder='password' />
              <button>Submit</button>
            </form>
          </div>
        )
      }
      {
        !isLogin && (
          <div>
            <form className='flex flex-col gap-4'>
              <label>Email</label>
              <input type='text' placeholder='email' />
              <label>password</label>
              <input type="password" placeholder='password' />
              <label>username</label>
              <input type="text" placeholder='username' />
              <button>Submit</button>
            </form>
          </div>
        )
      }
    </div>
  )
}

LoginComponent.propTypes = {
  authentication: PropTypes.func,
  register: PropTypes.func,
  authReducer: PropTypes.object
}

export default LoginComponent