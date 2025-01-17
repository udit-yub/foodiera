import React, { useState } from 'react'
import loginImg from '../assets/assets/Login.png'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [currstate, setcurrstate] = useState('Signup')
  return (
    <section className='absolute top-0 left-0 h-full w-full z-50 bg-white'>
      <div className='flex h-full w-full'>
        <div className='w-1/2 hidden sm:block'>
          <img src={loginImg} alt="" className=' object-cover aspect-square h-full w-full'/>
        </div>
        <div className='flex w-full sm:w-1/2 items-center justify-center'>
          <form className='w-[90%] text-gray-800'>
            <div className='w-full mb-4'>
              <h3 className='bold-36'>{currstate}</h3>
            </div>
            {currstate === "Signup" && (<div>
              <label htmlFor='name' className='medium-14'>Name</label>
              <input type="text" placeholder='Name' className='w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1'></input>
            </div>)}
            <div className=''>
              <label htmlFor='email' className='medium-14'>Email</label>
              <input type="email" placeholder='Email' className='w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1'></input>
            </div>
            <div>
              <label htmlFor='password' className='medium-14'>Password</label>
              <input type="password" placeholder='Password' className='w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1'></input>
            </div>
            <button className='btn-dark w-full mt-5 !py-[7px] !rounded' type='submit'>{currstate === 'Signup' ? 'Sign up' : 'Login'}</button>
            <div className='w-full flex flex-col gap-y-3 medium-14'>
              <div className='underline'>
                Forgot your password?
              </div>
              {currstate === 'login' ? (<div className='underline' onClick={()=>setcurrstate('Signup')}>Create account</div>) : ( <span className='cursor-pointer underline' onClick={()=>setcurrstate('Login')}>Login</span>)}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
