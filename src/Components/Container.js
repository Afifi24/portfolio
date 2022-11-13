import React, { useState } from 'react'
import styled from 'styled-components'
import ReactSwitch from 'react-switch'
import { createContext } from 'react'
import '../Container.css'
import {motion} from 'framer-motion'
import {TitleAnimation} from '../Animation'
export const ThemeContext = React.createContext(null)
export default function Container() {
  const[theme,setTheme] = useState('dark')
  const Toggletheme = ()=>{
     setTheme((curr)=>(curr==='light'? 'dark':'light')) 
  }
  return (
    <ThemeContext.Provider value={{theme,Toggletheme}}>
      <div id={theme}>
    <Containerstyled>
    <div className='switch'>
    <ReactSwitch onChange={Toggletheme} checked={theme === 'dark'} />
        </div>
     <div className="head">
     <motion.h1 variants={TitleAnimation} initial='hidden' animate='show'>ai</motion.h1>
        <h2>afifi ibrahim </h2>
        <h4>Front-End Developer</h4>
        <p>I am a Developer with a working proficiency in HTML, CSS, Javascript and React </p>
     </div>
     <div className="about">
      <h1>A little about Me</h1>
      <div className="about-me">
        <div className="hello">
        <h2>Hello!</h2>
      <p>My name is brahim afifi nd i'm a passionate Frontend Web Developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technologies.
             
             <br/><br/>
             
             My goal is to continously grow as a developer while staying current with the latest trend and technologies.
             <br/><br/>
             I would love to work for a team that is passionate about what they create and that is constantly striving to move forward.
       </p >
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="languages">
          <div className="one">
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
          <p>REACT</p>
          </div>
         <div className="two">
         <p>SASS</p>
           <p>GIT</p>
           <p>GITHUB</p>
         </div>
          </div>
         
          
        </div>

      </div>
      
     </div>
    
     <div className="line"></div>
     <Footer>
      <p className='footer'>&copy; 2022 afifi ibrahim Designed, <br /> Developed and Deployed by Me</p>
    </Footer>
    </Containerstyled>
    </div>
    </ThemeContext.Provider>
  )
}

const Containerstyled = styled.div`
min-height: 100vh;
padding-top: 90px;
font-family: 'Kulim Park', sans-serif;
.line{
    height: 1px;
    width: 90%;
    margin: auto;
    background-color: #666;
}
.switch{
        position: fixed;
        right: 4rem;
        top: 1.5rem;
        z-index: 10;
    }
p{
  font-size: 18px;
  display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
@media(max-width:700px){
  padding-top: 0px;
  }
.head{
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom:7rem;
  @media(max-width:700px){
  margin-bottom:0rem;
   h1{
    font-size: 10rem;
   }
  }
  h1{
    font-size: 23rem;
    color: #00fff0;
    @media(max-width:700px){
    font-size: 14rem;
  }
  }
  h1:first-letter{
    color: #fff;
  }
  h2{
   font-size: 24px;
  }
  h4{
    margin: 2rem;
    opacity: 0.7;
  }
  p{
    text-align: center;
    padding: 0rem 2rem;
    line-height: 30px;
  }
}
.about{
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
 .about-me{
  display: flex;
  height: 100vh;
  padding: 4rem;
  gap: 2rem;
  @media(max-width:844px){
   flex-direction: column;
   padding: 2rem;
  }
  
  .hello{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  .skills{
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    flex: 1;
   .languages{
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .one, .two{
      display: flex;
      gap: 1rem;
    }
    
    p{
      border: 1px solid #fff;
      padding: 0.3rem 0.8rem;
      opacity: 0.7;
      font-weight:bold;
      font-size: 0.8rem;
    }
   }

  }
 }

  h1{
    margin-bottom:3rem;
    @media(max-width:700px){
    text-align: center;
  }
  }
  p{
    margin-top:2rem;
    line-height: 30px;
    @media(max-width:700px){
    text-align: center;
  }
  }
}

`
const Footer = styled.div`
height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p{
  text-align: center;
}
`