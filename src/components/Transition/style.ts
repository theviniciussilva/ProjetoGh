import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SlideIn = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background-color: rgb(195, 75, 75);
`

export const SlideOut = styled(motion.div)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background-color: rgb(254, 122, 122);
`

export const Logo = styled(motion.div)`
  width: 40px;
  height: 60px;

  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50 -50;
  z-index: 5;

  h2{
    font-size: 100px;
    font-weight: bold;
  }
`
