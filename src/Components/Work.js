import React,{useState} from 'react'
import styled from 'styled-components'
import ReactSwitch from 'react-switch'
import { createContext } from 'react'
import '../work.css'
import { slider } from '../Animation'
import {motion} from 'framer-motion'
import Workitem from './Workitem'
import WorkData from './WorkData'
export const ThemeContext = React.createContext(null)
export default function Work({item}) {
  const[theme,setTheme] = useState('dark')
    const Toggletheme = ()=>{
       setTheme((curr)=>(curr==='light'? 'dark':'light')) 
    }
  return (
    <ThemeContext.Provider value={{theme,Toggletheme}}>
    <div id={theme}>
    <Workstyled>
    <div className="switch">
    <ReactSwitch onChange={Toggletheme} checked={theme === 'dark'} />
    </div>
      <h1>My Work</h1>
      {WorkData.map((item)=>(
        <Workitem item={item}/>
      ))}
      
         <div className="line"></div>
      <Footer>
      <p className='footer'>&copy; 2022 afifi ibrahim Designed, <br /> Developed and Deployed by Me</p>
    </Footer>
    </Workstyled>
    </div>
    </ThemeContext.Provider>
  )
}

// styled-components

const Workstyled = styled.div`
font-family: 'Kulim Park', sans-serif;
padding-top:90px;
.switch{
        position: fixed;
        right: 4rem;
        top: 1.5rem;
        z-index: 7;
    }
.line{
    height: 1px;
    width: 90%;
    margin: auto;
    background-color: #666;
}
h1{
    text-align: center;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 52px;
    
    /* font-size: clamp(1rem, 10vh + 1rem ,5rem); */
}
.work{
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 85vh;
    @media(max-width:814px){
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
.text-work{
    display: flex;
    flex:1;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 5rem;
    @media(max-width:814px){
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0rem 3rem;

    }
    p{
     margin-bottom:1rem;
     font-size: 18px;
     line-height: 30px;
    }
    h2{
        margin-bottom:2rem;
    }
    .fa-solid{
        margin-left:1rem;
    }
    .fa-github, .fa-solid{
      color: #9796f0;
        &:hover{
            color: #00fff0;
            
        }
    }
    .language{
        display: flex;
        align-items: center;
        margin-top: 2rem;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        /* text-align: center; */
        p{
            padding: 0.2rem 1rem;
            border: 1px solid #555;
            color: #555;
        }
    }
}
.image-work{
    display: flex;
    flex: 1;
    @media(max-width:814px){
      align-items: center;
      justify-content: center;
    }
    img{
        box-shadow: 2px 2px 20px rgba(0,0,0,0.2);
        width:80% ;
        border-radius:20px;
        @media(max-width:814px){
        width: 330px;
        
    }
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
const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh;
background-color: red;
z-index: 15;
`
const Frame2 = styled(Frame1)`
background-color: blue;
`
const Frame3 = styled(Frame1)`
background-color: green;
`
const Frame4 = styled(Frame1)`
background-color: yellow;
`