import React, { useContext, useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import logo from '../assets/assets/logo.svg'
import Navbar from './Navbar'
import {CgMenuLeft} from 'react-icons/cg'
import {TbArrowNarrowRight, TbUserCircle} from 'react-icons/tb'
import {RiUserLine, RiShoppingBag4Line} from 'react-icons/ri'
import Item from './item'

const Header = () => {
  
  const [menuOpened, setmenuopened] = useState(false)
  const toggleMenu = () =>{
    setmenuopened((prev) =>!prev)
  }
  const [token, settoken] = useState("")
  const navigate=useNavigate()
  console.log('header rendered')
  return (
   <header className='py-3 w-full absolute top-0 left-0 right-0 z-50 bg-white'>
    <div className='max-padd-container flexBetween'>
      {/*logo */}
      <Link to={'/'} className='bold-24 flex-1 flex items-baseline'>
      <img src={logo} alt="" height={24} width={24} className='hidden sm:flex'/>
      <span className='text-secondary pl-2'>Food</span>iera
      </Link>
      {/*navbar*/}
      <div className='flex-1'>
      <Navbar menuOpened={menuOpened} toggleMenu={toggleMenu} containerStyles={`${menuOpened ? "flex flex-col gap-y-12 h-screen w-[222px] absolute left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl" : "hidden xl:flex gap-x-5 xl:gap-x-8 medium-15 rounded-full px-2 py-1"}`}/>
      </div>
      <div className='flex-1 flex items-center justify-end gap-x-3 sm:gap-x-10'>
        {!menuOpened &&(<CgMenuLeft onClick={toggleMenu} className='text-2xl xl:hidden cursor-pointer'/>)}
        <Link to={'/cart'} className='flex relative'>
        <RiShoppingBag4Line className='text-2xl'/>
        
        </Link>
        <div className='group relative'>
          <div onClick={()=>!token && navigate('/login')}>
            {token ? (<div className='my-[9px]'>
              <TbUserCircle className='text-[29px] cursor-pointer'/>
          </div>) : (<button className='btn-outline flexCenter gap-x-2'>login<RiUserLine className='text-xl' /></button>)}
        </div>
        {token && <>
        <ul className='bg-white shadow-sm p-2 w-32 ring-1 ring-slate-900/15 rounded absolute right-0 top-10 hidden group-hover:xl:flex flex-col'>
          
          <li className='flexBetween cursor-pointer'>logout <TbArrowNarrowRight className='opacity-50 text-[19px]'/></li>
        </ul>
        </>}
      </div>
    </div>
    </div>
   </header>
  )
}

export default Header
