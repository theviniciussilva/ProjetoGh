import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 30px;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: rgba(0, 0, 0, 0); */
  background-image: linear-gradient(
    137deg,
    rgba(17, 18, 20, 0.75) 4.87%,
    rgba(12, 13, 15, 0.9) 75.88%
  );
  backdrop-filter: blur(5px);
  border-radius: 16px;

  padding: 16px;
  width: 100%;
  height: 76px;
  margin-top: 30px;

  border-style: solid;
  border-color: rgba(36, 36, 39, 0.75);
  border-width: 4px 3px 3px 3px;
  img {
    height: 30px;
  }

  div {
    width: 100px;
    display: block;
    align-items: center;
    justify-content: center;

    h1 {
      margin-left: 10px;
      color: #fff;
    }
    h2 {
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      cursor: pointer;
      color: ${cores.headertxt};
      font-weight: normal;
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
    &:hover {
      color: #fff;
      transition: all 0.3s ease;
    }
    margin-right: 16px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    cursor: pointer;
    color: ${cores.headertxt};
  }
`
