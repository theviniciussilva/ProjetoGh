import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Card = styled(motion.div)`
  position: relative;
  height: 560px;
  border-radius: 12px;
  border: 1px solid #eee;
  width: 400px;;
  flex-shrink: 0;
  margin-right: 38px;
  border: none;

  video {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`

export const CardFilter = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`
