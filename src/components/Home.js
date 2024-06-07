import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink, SideLogo ,ReactLogo, HomeServiceCard,JavascriptLogo, NextJsLogo, TailwindLogo,AppCustomButton, HeadingTitle} from './MyFiles';
const Home = () => {
  const [textchange, setTextChange] = useState('Web Developer');

  const [textcount, setTextCount] = useState(0);

  const [opacity, setOpacity] = useState(0);

  const arr = ['Fullstack Developer', 'Programmer', 'UI/UX Designer', 'Web Developer']


  /* Text changing animation using useeffect dependency on textchange hook and changetext function */
  useEffect(() => {
    setOpacity(1);
  }, [])

  useEffect(() => {
    changetext();
  }, [textchange])

  function changetext() {
    setTimeout(() => {

      setTextCount((textcount + 1) % arr.length);
      setTextChange(arr[textcount])
      setOpacity(1);
    }, 2600);
    setTimeout(() => {


      setOpacity(0)
    }, 1200);
  }


  const HomeServiceCardData=[
    {
      logoimg:ReactLogo,
      name:'React',
      para:"We build websites on demand weather it's for business need or for personal use.get in touch with us to know furthe"
    },
    {
      logoimg:JavascriptLogo,
      name:'Javascript',
      para:"We build websites on demand weather it's for business need or for personal use.get in touch with us to know furthe"
    },
    {
      logoimg:NextJsLogo,
      name:'Next Js',
      para:"We build websites on demand weather it's for business need or for personal use.get in touch with us to know furthe"
    },
    {
      logoimg:TailwindLogo,
      name:'Tailwind Css',
      para:"We build websites on demand weather it's for business need or for personal use.get in touch with us to know furthe"
    },

  ]



  return (
    <>
    <div className='rootcontainers pb-10  pl-10'>
    <div className='homecontainer justify-center flex gap-5 pr-5 w-full'>
      <div className='flex respintroBox  homecontainerdirectChild1 flex-wrap flex-col gap-4 w-4/5 justify-center '>
        <h2 className=' text-2xl font-semibold respwelcometitle'>Welcome to <span className='font-bold'>Faraz</span> <span className='font-bold text-sky-400'>Dev</span></h2>
        <h1 className='text-6xl w-full font-semibold respTitle '>

          <span>I'm a </span><span className={`homeintroanimation  text-sky-400`} style={{opacity:opacity}}>{textchange} </span>

        </h1>
        <p className='mt-5 text-sm text-slate-500 max-w-96'>Hello, I am Faraz a web developer.I Develop Websites for Business,Products and as per as clients need.I've Experience in various technologies such as react,redux,node js,databases (sql, no sql). Contact us here for further information.</p>
        <button className='flex text-sm font-semibold'><NavLink className={`homeMainBtn`} to='about'>see more about us</NavLink></button>
        
      </div>

      <div className='flex justify-center homecontainerdirectChild2 items-center order-1   '>
        <img src={SideLogo} alt='logo' className=''/>
      </div>
    </div>

    <div className='flex max-md:flex-wrap resphomeservicessec justify-center  gap-14 mt-16 '>
      <div className='flex flex-col gap-3 text-3xl'>
        <h3 className=' text-slate-400 text-sm'>our services</h3>
        <HeadingTitle text="WHAT WE DO?"/>
        <p className=' text-sm mt-4 text-slate-400 max-w-64'>We build websites on demand weather it's for business need or for personal use.get in touch with us to know further</p>
       
          <AppCustomButton path="services" text="view all services"/>
        
        
        
      </div>

      <div className='flex flex-col flex-wrap gap-5 justify-center'>
         <HeadingTitle text="My Skills"/>
        <div className='flex flex-wrap gap-4 justify-center'>
          {HomeServiceCardData.map((e,i)=>{
            return <HomeServiceCard logoimg={e.logoimg} name={e.name} para={e.para}/>
          })}       
        </div>
        <AppCustomButton path="about" text="view skills"/>
      </div>

    </div>

    </div>

    </>
  )
}

export default Home
