import React from 'react'
import {SkillBoxCard} from './MyFiles'
const SkillTypeBox = (props) => {
  return (
    <div className='flex flex-col justify-center gap-6'>
          <h3 className='text-xl font-semibold'>{props.title}</h3>
        <div className='flex flex-wrap gap-5 p-6 py-12 rounded-xl bg-black/[.5] justify-center items-centerl w-full'>
          {
            props.data.map((e,i)=>{
              return <SkillBoxCard key={i} logo={e.logo} title={e.title}/>
            })
          }
        </div>
        </div>
  )
}

export default SkillTypeBox
