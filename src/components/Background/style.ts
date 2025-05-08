import { motion } from 'framer-motion'
import styled from 'styled-components'

export const PrimaryBg = styled(motion.div)`
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: -1;

    iframe{
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        opacity: 0.2;
        border: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(2px);
        z-index: -1;
        border: 1px solid #fff;
    }
`