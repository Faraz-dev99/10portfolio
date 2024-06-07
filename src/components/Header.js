import React from 'react'
import '../App.css'
import { NavLink, MenuIcon,CancelIcon,CloseIcon } from './MyFiles'

/*Hooks */

import { useState } from 'react'


const Header = () => {
  const body=document.getElementById('root')
  const [openmenu, setOpenMenu] = useState(false);

  const menutoggle = () => {
    (openmenu) ? setOpenMenu(false) : setOpenMenu(true);
    (openmenu)?body.style.position='static':body.style.position='fixed';
  }

  return (
    <header className='rootcontainers flex relative  items-center justify-between px-10 max-sm:px-2 py-5'>
      <div className='font-bold text-2xl'>Faraz <span className=' text-sky-500'>Dev</span></div>
      <div className='navmanu hidden ' onClick={menutoggle}>{openmenu?<CloseIcon />:<MenuIcon />}</div>
 
      <nav className={` mainNavbar z-10 ${openmenu ? 'openmenu' : ''}`} >
        <ul className='flex gap-5 font-semibold'>
          <NavLink className={({ isActive }) => {
            return isActive ? 'text-sky-400' : ''
          }} to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => {
            return isActive ? 'text-sky-400' : ''
          }} to='about'>About</NavLink>
          <NavLink className={({ isActive }) => {
            return isActive ? 'text-sky-400' : ''
          }} to='services'>Services</NavLink>
          {/* <NavLink className={({ isActive }) => {
            return isActive ? 'text-sky-400' : ''
          }} to='blogs'>Blogs</NavLink> */}
          <NavLink className={({ isActive }) => {
            return isActive ? 'text-sky-400' : ''
          }} to='contact'>Contact Us</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
