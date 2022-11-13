import React from 'react'
import Contact from '../Components/Contact'
// animation
import {motion} from 'framer-motion'
import { PageAnimation } from '../Animation'
import styled from 'styled-components'

export default function ContactUs() {
  return (
    
      <Div 
      exit='exit' 
      variants={PageAnimation}
       initial='hidden' 
       animate='show'>
     <Contact/>
    </Div>
   
  )
}
const Div = styled(motion.div)`

`
