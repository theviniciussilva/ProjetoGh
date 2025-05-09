import { createGlobalStyle } from 'styled-components'

export const cores = {
  headertxt: 'rgb(156, 156, 157)',
}

const EstiloGlobal = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }

  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Inter", sans-serif;


  .container{
    max-width: 1240px;
    margin: 0 auto;
  }
  
  body{
    background:rgb(0, 0, 0);
  }
}
`

export default EstiloGlobal
