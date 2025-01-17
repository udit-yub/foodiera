import React from 'react'
import { TbHomeFilled } from 'react-icons/tb'
import {FaRegWindowClose} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import {IoMdListBox} from 'react-icons/io'
import {IoMailOpen} from 'react-icons/io5'

const Navbar = ({containerStyles, toggleMenu, menuOpened}) => {
  const navitems=[{
    to: '/', label:'home', icons: <TbHomeFilled />},
    {to: '/menu', label:'menu', icons: <IoMdListBox />},
    {to: '/contact', label:'contact', icons: <IoMailOpen />}
  ]
  return (
   <nav className={containerStyles}>
    {menuOpened && (
      <>
      <FaRegWindowClose onClick={toggleMenu} className='text-xl self-end cursor-pointer'/>
      <Link to={'/'} className='bold-24 mb-10'>
        <h4 className='text-secondary'>Foodiera</h4>
      </Link>
      </>
    )}
    {navitems.map(({to, label, icons})=> (
      <div key={label} className='inline-flex'>
        <NavLink
        to={to}
        className={({isActive})=> isActive? "active-link  gap-x-2 flexCenter " : "flexCenter gap-x-2 "}>
          <span className='text-xl'>{icons}</span>
          <h5 className='medium-16'>{label}</h5>
        </NavLink>
      </div>
    ))}
   </nav>
  )
}

export default Navbar
