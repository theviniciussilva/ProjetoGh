import { createGlobalStyle } from 'styled-components'
import hellobg from './assets/images/HelloBG.jpg'

export const cores = {
  headertxt: 'rgb(156, 156, 157)',
}

const EstiloGlobal = createGlobalStyle`
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Roboto", sans-serif;

  .container{
    max-width: 1240px;
    margin: 0 auto;
  }
  
  body{
    /* background-image: url(${hellobg});
    color: #fff; */
    background-color: rgb(22, 22, 22);
  }

  
}
`

export default EstiloGlobal
