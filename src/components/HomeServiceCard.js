import React from 'react'
import { ReactLogo } from './MyFiles'
const HomeServiceCard = (props) => {
  return (
    <>
    <div className='flex flex-col my-5 gap-5 max-w-44'>
          <div className='flex'><div className=''><img src={props.logoimg} className=' w-10'/></div></div>
          <h2 className='text-xl font-semibold'>{props.name}</h2>
          <p className=' text-slate-400 max-w-64 text-sm'>{props.para}</p>
        </div>
    </>
  )
}

export default HomeServiceCard
