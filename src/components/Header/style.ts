import styled from 'styled-components'
import { cores } from '../../styles'
import { motion } from 'framer-motion'

export const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 5%;
  left: 50%;
  translate: -50% -50%;

  background-color: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 13px;
  font-weight: 600;
  line-height: 1;

  background-image: linear-gradient(
    137deg,
    rgba(17, 18, 20, 0.75) 4.87%,
    rgba(12, 13, 15, 0.9) 75.88%
  );

  backdrop-filter: blur(5px);
  border-radius: 16px;

  padding: 8px 16px;
  width: 100%;
  height: 60px;
  margin-top: 30px;

  box-shadow: -1px -1px 1px 0 inset rgb(216, 26, 26);

  /* border-style: outset;
  border-color: rgba(36, 36, 39, 0.75);
  border-width: 3px 2px 3px 2px; */

  .svg-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
      margin-left: 10px;
      color: #fff;
      display: flex;
    }

    img {
      height: 40px;
    }
  }
`

export const Nav = styled.nav`
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }

  li {
    .links {
      &:hover {
        color: #fff;
        transition: all 0.3s ease;
      }
      margin-right: 16px;
      cursor: pointer;
      color: ${cores.headertxt};
    }
  }
`
