import Cards from '../../components/Cards'
import { SectionDiv } from './style'

const Trabalhos = () => {
  return (
    <div>
      <SectionDiv id='works'>
        <h3>Trabalhos</h3>
        <div className='container carrousel'>
            <Cards/>
        </div>
      </SectionDiv>
    </div>
  )
}

export default Trabalhos
