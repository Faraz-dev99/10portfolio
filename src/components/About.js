import React, { useEffect, useState } from 'react'
import HeadingTitle from './HeadingTitle';
import SkillBoxCard from './SkillBoxCard';
import { GitLogo,GitHubLogo,PostmanLogo,NetlifyLogo, JavascriptLogo, MongoDbLogo, MySqlLogo, NextJsLogo, NodeJsLogo, PhpLogo, ReactLogo, TailwindLogo } from './MyFiles';
import SkillTypeBox from './SkillTypeBox';
import '../App.css'

const About = () => {
  const [pageshow, setPageShow] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPageShow(1);
    }, 20);
    
  }, [])

  const frontendSkillArr=[{
    logo:ReactLogo,
    title:"React"
  },
  {
    logo:JavascriptLogo,
    title:"Javascript"
  },
  {
    logo:TailwindLogo,
    title:"Tailwind Css"
  },
  {
    logo:NextJsLogo,
    title:"Next Js"
  },
]

const backendSkillArr=[
  {
    logo:NodeJsLogo,
    title:"Node Js"
  },
  {
    logo:PhpLogo,
    title:"php"
  },
  {
    logo:MySqlLogo,
    title:"My Sql"
  },
  {
    logo:MongoDbLogo,
    title:"Mongo DB"
  },
]

const othersSkillArr=[
  {
    logo:GitLogo,
    title:"git"
  },
  {
    logo:GitHubLogo,
    title:"github"
  },
  {
    logo:PostmanLogo,
    title:"postman"
  },
  {
    logo:NetlifyLogo,
    title:"netlify"
  },
]

  return (
    <div className={`opacityeffect flex flex-col gap-16 px-10 max-sm:px-5 my-10`} style={{opacity:pageshow}}>
      <div className='p-6 py-12 rounded-xl bg-black/[.5]'>
        <div><HeadingTitle text="About" /></div>

        <div className=' text-sky-100'>
          Hello, I am Faraz a web developer who loves to create and beautify websites.I Develop Websites for Business,Products and as per as clients need.I've Experience in various technologies such as <span className=' text-cyan-500'>react,redux,node js,databases (sql, no sql)</span> etc.I love making new websites and i always eager to learn something and do challenges. I love to have my clients happy with the sites performance, which they are able to see on their personal devices. Apart from this, I have also worked as a feelancer and build various type of projects. I hope I will get the opportunity to work in your esteemed organization. That's all from my side, get in touch with us for further information.
        </div>
      </div>

      <div className='flex flex-col gap-10 justify-center'>

        <div style={{marginBottom:'-30px'}}><HeadingTitle text="My Skills"/></div>
        
        <SkillTypeBox title="Frontend" data={frontendSkillArr}/>
        <SkillTypeBox title="Backend" data={backendSkillArr}/>
        <SkillTypeBox title="Others" data={othersSkillArr}/>
        
      </div>

    </div>
  )
}

export default About
