import React from 'react'
import {NavLink, FacebookOutlinedIcon, InstagramIcon, TelegramIcon, YouTubeIcon, XIcon, TwitterIcon } from './MyFiles'
const Footer = () => {

  const currentDate=new Date().getFullYear();

  return (
    <div className='flex flex-col px-10 max-sm:px-2 py-10 pb-20 gap-14 justify-center mt-24 items-center'>
      <div className='flex flex-col gap-5 justify-center items-center'>
      <p className='text-2xl max-sm:text-sm text-slate-400'>Let's Work Together</p>
        <h1 className='text-5xl max-tn:text-xs max-lg:text-4xl max-md:text-2xl max-sm:text-lg text-sky-500 font-bold hover:text-sky-300 hover:cursor-pointer break-all'>farazdev001@gmail.com</h1>
      </div>

      <div className='flex  flex-wrap w-full justify-center pt-10 border-t border-sky-500   items-center gap-12'>
        <h1 className='text-3xl self-start text-center font-bold'>Follow me</h1>
        <div className='flex flex-wrap justify-center gap-3 max-w-40'>
          <a href='#'><FacebookOutlinedIcon className=' text-cyan-500 hover:text-sky-300' /></a>
          <a href='#'><InstagramIcon className=' text-cyan-500 hover:text-sky-300' /></a>
          <a href='#'><TelegramIcon className=' text-cyan-500 hover:text-sky-300' /></a>
          <a href='#'><YouTubeIcon className=' text-cyan-500 hover:text-sky-300' /></a>
          <a href='#'><XIcon className=' text-cyan-500 hover:text-sky-300' /></a>
          <a href='#'><i className="fa-brands fa-linkedin-in text-cyan-500 text-xl hover:text-sky-300"></i></a>
        </div>
      </div>



      <div className='flex mainfooterboxchild flex-wrap px-2 w-full justify-center gap-10  items-center'>
        <h1 className=' font-bold text-xl'><span>Faraz</span> <span className=' text-cyan-500'>Dev</span></h1>
        <div className='flex mainfooterlink items-center flex-wrap gap-7 justify-center text-sky-100'>
        <NavLink className=' hover:text-cyan-500' to='/'>Contact us</NavLink>
          <NavLink className='hover:text-cyan-500' to='about'>About us</NavLink>
          <NavLink className='hover:text-cyan-500' to='services'>Services</NavLink>
          <NavLink className='hover:text-cyan-500' to='contact'>Our Projects</NavLink>
        </div>
      </div>
      <div className='flex w-full justify-center mt-10 items-center text-slate-400 font-extralight text-sm text-center'>Faraz Dev copyright &copy;{currentDate} all rights reserved</div>
    </div>
  )
}

export default Footer
