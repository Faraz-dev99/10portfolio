import React from 'react'

const ServiceItemCard = (props) => {
  return (
    <div className='flex flex-col relative justify-center items-center py-5 px-10 max-sm:px-2 my-5 gap-5 max-w-60 border-2 border-slate-500'>
         <div className=' absolute left-1/2 text-cyan-500' style={{translate:"-50%",top:"-20px"}}>{props.logo}</div>
          <h2 className='text-xl font-semibold mt-6'>{props.title}</h2>
          <p className=' text-slate-400 max-w-64 text-sm text-center'>{props.text}</p>
        </div>
  )
}

export default ServiceItemCard
