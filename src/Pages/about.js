import React from 'react'
import Container from '../Components/Container'
import styled from 'styled-components'
// animation
import { PageAnimation } from '../Animation'
import {motion} from 'framer-motion'
export default function about() {
  return (
    <motion.div exit='exit' variants={PageAnimation} initial ="hidden" animate="show">
      <Container/>
    </motion.div>
  )
}


