import React from 'react'
import Work from '../Components/Work'
// animation
import {motion} from 'framer-motion'
import { PageAnimation } from '../Animation'
export default function work() {
  return (
    <motion.div exit='exit' variants={PageAnimation} initial='hidden' animate='show'>
    
        <Work/>
    
    </motion.div>
  )
}
