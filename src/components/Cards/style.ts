import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Card = styled(motion.div)`
  position: relative;
  background-color: rgb(37, 122, 175);
  height: 530px;
  border-radius: 12px;
  border: 1px solid #eee;

  video{
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  /* &:hover{
    filter: brightness(50%)
  } */

  /* border-style: outset; */

  /* box-shadow: -1px -1px 1px 0 inset rgb(37, 122, 175), 1px 1px 0px 0 inset rgb(37, 122, 175); */
`

export const CardFilter = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`
