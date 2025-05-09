import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`
export const TextDiv = styled.div`
  display: block;
  width: 1000px;
  height: 386px;

  color: #fff;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
  }

  h3 {
    font-family: 'Viga', sans-serif;
    font-weight: normal;
    font-size: 170px;
    margin-bottom: 27px;
  }

  p {
    max-width: 513px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    line-height: 30px;
    margin: 0px;
    overflow-wrap: break-word;
  }
`

export const ProfileDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 450px;
    border-radius: 50%;
  }
`
