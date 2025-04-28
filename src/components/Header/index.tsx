import { HeaderContainer, Nav } from './style'
import 'animate.css'

const Header = () => {
  return (
    <>
      <HeaderContainer className="container animate__animated animate__fadeIn">
        <div>
          <h1>(LOGO)</h1>
        </div>
        <Nav>
          <ul>
            <li>Trabalhos</li>
            <li>Contato</li>
            <li>Sobre mim</li>
          </ul>
        </Nav>
      </HeaderContainer>
    </>
  )
}

export default Header
