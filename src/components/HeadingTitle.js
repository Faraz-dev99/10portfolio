import React from 'react'

const HeadingTitle = (props) => {
  return (
    <>
      <h2 className='my-2 mb-10 pb-5 text-left text-2xl font-semibold  relative after:w-1/4 after:h-full after:absolute after:top-0 after:left-0 after:border-sky-500 after:border-b-2'>{props.text}</h2>
    </>
  )
}

export default HeadingTitle
