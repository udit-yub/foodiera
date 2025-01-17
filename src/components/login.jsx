import React, { useState } from 'react'
import loginImg from '../assets/assets/Login.png'
const Login = () => {
  const [currstate, setcurrstate] = useState('signup')
  return (
    <section>
      <div>
        <div>
          <img src={loginImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Login
