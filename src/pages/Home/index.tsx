import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Transition from "../../components/Transition"

type Props = {
    isActive: boolean
  }

const Home = ({isActive}: Props) => {
    
    return(
        <>
            <Transition isActive={isActive}/>
            <Hero/>
            <Header/>
        </>
    )
}

export default Home