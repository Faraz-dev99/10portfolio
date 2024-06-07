import React,{useState,useEffect} from 'react'
import {BusinessIcon, GridViewIcon, LanguageIcon, ServiceItemCard, WebIcon} from './MyFiles'
import { GridView } from '@mui/icons-material'
const Services = () => {
  const [pageshow, setPageShow] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setPageShow(1);
    }, 20);
    
  }, [])

  const ServicesitemArr=[{
    logo:<WebIcon style={{fontSize:'40px'}}/>,
    title:"React",
    text:"We build websites on demand weather it's for business need or for personal use.get in touch with us to know furthe"
  },
  {
    logo:<BusinessIcon style={{fontSize:'50px'}}/>,
    title:"Javascript",
    text:"We build websites on demand weather it's for business need or for personal use.get in touch with us to know furthe"
  },
  {
    logo:<LanguageIcon style={{fontSize:'50px'}}/>,
    title:"Tailwind Css",
    text:"We build websites on demand weather it's for business need or for personal use.get in touch with us to know furthe"
  },
  {
    logo:<GridViewIcon style={{fontSize:'50px'}}/>,
    title:"Next Js",
    text:"We build websites on demand weather it's for business need or for personal use.get in touch with us to know furthe"
  },
]
  return (

    <div className={`opacityeffect flex mt-10 justify-center items-center w-full px-10 max-sm:px-5`} style={{opacity:pageshow}}>
      <div className='flex flex-col w-full justify-center items-center gap-8'>
        <h3 className=' text-2xl font-bold text-center text-cyan-500 max-sm:text-sm max-md:text-lg'>MY SERVICES</h3>
        <h1 className='text-4xl font-extrabold text-center lg:w-1/2 max-sm:text-xl max-md:text-2xl max-lg:text-3xl'>Developing Website through various advance technologies</h1>
        <div className='flex flex-wrap mt-10 justify-center items-center gap-5'>{
            ServicesitemArr.map((e,i)=>{
              return <ServiceItemCard key={i} logo={e.logo} title={e.title} text={e.text}/>
            })
          }
          </div>

          <div className='flex flex-col mt-8 justify-center items-center w-full  gap-5'>
            
            <div className='flex flex-col  gap-12 max-xl:w-full  min-w-half'>
              <h2 className=' mb-2 text-xl font-semibold'>Technologies</h2>
              <div className='flex gap-3 w-full  items-center'>
                <div className=' w-full relative after:absolute after:-bottom-5 after:left-0 after:h-2 after:rounded after:w-4/5 after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-500 '>HTML</div><div className=' text-xs text-slate-300'>Advance</div>
              </div>
              <div className='flex gap-3 justify-center  items-center'>
              <div className=' w-full relative after:absolute after:-bottom-5 after:left-0 after:h-2 after:rounded after:w-3/4 after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-500 '>CSS, Tailwind, Bootstrap</div><div className=' text-xs text-slate-300'>Advance</div>
              </div>
              <div className='flex gap-3 justify-center  items-center'>
              <div className=' w-full relative after:absolute after:-bottom-5 after:left-0 after:h-2 after:rounded after:w-4/5 after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-500 '>Javascript, Typescript, JQuery</div><div className=' text-xs text-slate-300'>Advance</div>
              </div>
              <div className='flex gap-3 justify-center  items-center'>
              <div className=' w-full relative after:absolute after:-bottom-5 after:left-0 after:h-2 after:rounded after:w-3/4 after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-500 '>CSS, Tailwind, Bootstrap</div><div className=' text-xs text-slate-300'>Advance</div>
              </div>
              <div className='flex gap-3 justify-center  items-center'>
              <div className=' w-full relative after:absolute after:-bottom-5 after:left-0 after:h-2 after:rounded after:w-3/5 after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-500 '>UI Design</div><div className=' text-xs text-slate-300'>Regular</div>
              </div>
              <div className='flex gap-3 justify-center  items-center'>
              <div className=' w-full relative after:absolute after:-bottom-5 after:left-0 after:h-2 after:rounded after:w-3/4 after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-500 '>React</div><div className=' text-xs text-slate-300'>Advance</div>
              </div>
              <div className='flex gap-3 justify-center  items-center'>
              <div className=' w-full relative after:absolute after:-bottom-5 after:left-0 after:h-2 after:rounded after:w-3/4 after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-500 '>Node js, Databases</div><div className=' text-xs text-slate-300'>Advance</div>
              </div>

            </div>
          </div>

      </div>
    </div>
  )
}

export default Services
