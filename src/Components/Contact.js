import React,{useState} from 'react'
import styled from 'styled-components'
import ReactSwitch from 'react-switch'
import { Link } from 'react-router-dom'
import { createContext } from 'react'
import '../Contact.css'
export const ThemeContext = React.createContext(null)
export default function Contact() {
    const[theme,setTheme] = useState('dark')
    const Toggletheme = ()=>{
       setTheme((curr)=>(curr==='light'? 'dark':'light')) 
    }
  return (
    <ThemeContext.Provider value={{theme,Toggletheme}}>
        <div id={theme}>
    <Contactstyled>
      <div className="head">
        <div className='switch'>
        <ReactSwitch onChange={Toggletheme} checked={theme === 'dark'} />
       
        </div>
        <h1> "Let's Connect!" </h1>
        <p>Feel free to connect with me on social media!
            <br />
            <br />
        Below you will find links to my <span>GitHub</span>,<span> Instagram</span>,<span> LinkeIdn</span>
        </p>
        <div className="icons">
            <a href="https://github.com/Afifi24" target='blank'>
            <i className="fa fa-github hello" ></i>
            </a>
            <a href="https://www.instagram.com/afifi-brahim" target='blank'>
            <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/brahim-afifi" target='blank'>
            <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/afifi_brahim" target='blank'>
            <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
        </div>
      </div>
      <div className="chat">
      <h1> Want To Chat? </h1>
      <p>Fill out this form to collaborate, ask a question about my word , or just say hi! </p>
      <form className='form'>
         <input type="text" placeholder='Name' />
         <input type="email" placeholder='Email' />
         <textarea name="message" id="" cols="40" rows="18"></textarea>
         <input type="button" value="Send" className='btn' />
      </form>
      </div>
      <div className="line"></div>
      <Footer>
      <p className='footer'>&copy; 2022 afifi ibrahim Designed, <br /> Developed and Deployed by Me</p>
    </Footer>
    </Contactstyled>
    </div>
    </ThemeContext.Provider>
  )
}
const Contactstyled = styled.div`
font-family: 'Kulim Park', sans-serif;
padding-top: 90px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-size:18px;

.line{
    height: 1px;
    width: 90%;
    margin: auto;
    background-color: #666;
}
h1{
    text-align: center;
    margin-bottom:4rem;
}
p{
text-align: center;
font-size:18px;
}
.head{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .switch{
        position: fixed;
        right: 4rem;
        top: 1.5rem;
        z-index: 10;
    }
    .icons{
        margin-top:1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
            margin: 0.4rem;
            font-size:1.7rem;
            .fab, .fa{
                color: #00fff0;
                &:hover{
                    
                    color: #9796f0;

                }
            }
        }
    }
}
.chat{
    height: 100vh;
    margin-bottom:12rem;
h1{
    text-align: center;
}
p{
    text-align: center;
}
.form{
    margin-top:4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    input{
        width: 21rem;
        margin: 1rem;
        height: 40px;
        border: none;
        border-bottom:1px solid #000;
        outline: none;
        padding: 0.5rem 1.5rem;
        font-size: 18px;
    }
    input:focus{
        border: 2px solid #000;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.3)

    }
    .btn{
        border: 2px solid #06beb6;
        border-radius: 30px;
        background-color: #06beb6;
        cursor: pointer;
        color:#fff;
        &:hover{
        border: 1px solid #06beb6;
        background-color: transparent;
        color: #000;
        transition: all 0.5s ease;
        }
    }
    
    
}
textarea{
  outline: none;
  padding: 0.5rem 1rem;
  
}
textarea:focus{
    border: 2px solid #000;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.2)
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