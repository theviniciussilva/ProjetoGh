import { Link } from 'react-router-dom'
import { HeaderContainer, Nav } from './style'
import { motion } from 'framer-motion'

const logoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
}

const pathVariants = {
  hidden: {
    opacity: 1,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  return (
    <>
      <HeaderContainer
        variants={logoVariants}
        animate="visible"
        initial="hidden"
        className="container"
      >
        <div className='svg-container'>
          <h1>
            <Link to="/">
            <motion.svg
            whileHover={
              {
                scale: 1.1,
                transition:{
                  type: 'spring',
                  ease: 'easeInOut',
                  duration: 0.2
                }
              }
            }
              width="40px"
              height="40px"
              viewBox="0 -5 56 70" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="svgGroup"
                stroke-linecap="round"
                fill-rule="evenodd"
                stroke="#fefefe"
                stroke-width="2"
                fill="none"
              >
                <motion.path
                  variants={pathVariants}
                  animate="visible"
                  initial="hidden"
                  d="M 55.417 9.237 L 53.126 18.82 A 23.976 23.976 0 0 0 44.549 10.591 A 23.488 23.488 0 0 0 32.652 7.501 A 29.019 29.019 0 0 0 32.64 7.501 Q 27.501 7.501 23.056 9.445 A 24.28 24.28 0 0 0 15.279 14.827 A 25.188 25.188 0 0 0 10.07 22.779 A 24.914 24.914 0 0 0 8.203 31.852 A 28.581 28.581 0 0 0 8.195 32.501 A 25.4 25.4 0 0 0 10.036 42.119 A 24.608 24.608 0 0 0 15.209 50.105 Q 18.542 53.542 22.952 55.522 A 22.851 22.851 0 0 0 31.281 57.47 A 26.658 26.658 0 0 0 32.57 57.501 A 29.074 29.074 0 0 0 38.638 56.882 A 26.531 26.531 0 0 0 39.966 56.563 A 25.608 25.608 0 0 0 45.464 54.413 A 23.499 23.499 0 0 0 46.39 53.89 L 46.39 37.501 L 29.167 37.501 L 29.167 30.417 L 54.029 30.417 L 54.029 57.917 Q 49.792 61.459 44.202 63.23 A 38.287 38.287 0 0 1 32.57 65.001 A 32.194 32.194 0 0 1 21.446 63.095 A 30.615 30.615 0 0 1 19.862 62.466 A 32.894 32.894 0 0 1 9.48 55.452 Q 5.001 50.973 2.501 45.105 A 31.718 31.718 0 0 1 0.003 32.921 A 36.086 36.086 0 0 1 0.001 32.501 A 31.51 31.51 0 0 1 2.36 20.31 A 30.544 30.544 0 0 1 2.536 19.897 A 33.005 33.005 0 0 1 9.549 9.549 A 32.894 32.894 0 0 1 19.931 2.536 A 31.751 31.751 0 0 1 32.189 0.004 A 36.306 36.306 0 0 1 32.64 0.001 A 31.777 31.777 0 0 1 45.14 2.466 A 33.204 33.204 0 0 1 55.417 9.237 Z"
                />
              </g>
            </motion.svg>
            </Link>
          </h1>
        </div>
        <Nav>
          <ul>
            <li><Link className='links' to="/about">Trabalhos</Link></li>
            <li><Link className='links' to="/about">Sobre mim</Link></li>
            <li><Link className='links' to="/about">Contato</Link></li>
          </ul>
        </Nav>
      </HeaderContainer>
    </>
  )
}

export default Header
