import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SectionDiv = styled.section`
  padding: 5.6vw;

  h3 {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 80px;
    margin-top: 20px;
    margin-bottom: 50px;
    color: #fff;
  }
`
export const Carousel = styled(motion.div)`
  position: relative;
  top: 50%;
  left: 50%;
  translate: -50% -5%;
  overflow: hidden;
  border-radius: 20px;
  max-width: 1200px;
`
export const InnerCarousel = styled(motion.div)`
  display: flex;
  flex-shrink: 0;
  cursor: grab;
`
export const Filter = styled.div`

`
