import React from 'react'
import { NavLink } from 'react-router-dom'
const AppCustomButton = (props) => {
  return (
    <div>
    <button><NavLink to={props.path} className='flex mt-5 px-3 py-2 rounded hover:text-sky-400 hover:after:border-white hover:before:border-white transition-all duration-700  text-sm font-thin relative after:w-1/4 after:h-1/2 after:absolute after:bottom-0 after:left-0 after:border-sky-500   after:border-b after:border-l before:w-1/4 before:h-1/2 before:absolute before:top-0 before:right-0 before:border-sky-500 before:border-t before:border-r '>{props.text}</NavLink></button>
    </div>
  )
}

export default AppCustomButton
