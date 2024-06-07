import React from 'react'

const SkillBoxCard = (props) => {/* max-h-72 max-w-72 */
  return (
    <div  className='SkillBoxCard flex flex-col justify-center gap-5 w-40 py-5  items-center bg-sky-900/[.3] hover:bg-sky-900/[.7] rounded-xl'>
      <div className=''><img src={props.logo} alt='logo' className=' w-14'/></div>
      <div className=' text-base font-medium'>{props.title}</div>
    </div>
  )
}

export default SkillBoxCard
