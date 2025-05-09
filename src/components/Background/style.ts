import { motion } from 'framer-motion'
import styled from 'styled-components'

export const PrimaryBg = styled(motion.div)`
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: -2;
    box-shadow: 0px -20px 3px 0 inset rgba(0,0,0);

    iframe{
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        opacity: 0.2;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        filter: blur(4px);
    }
`
