import { HeroContainer, ProfileDiv, TextDiv } from "./style"
import profilePicture from '../../assets/images/PERFIL-GH.png'

const Hero = () => {

    return(
        <>
        <HeroContainer>
            <TextDiv className="container">
                <h2>
                    Gh
                </h2>
                <h3>MOTION</h3>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                </p>
            </TextDiv>
            <ProfileDiv
            initial={{opacity: 0.5, scale: 1,}}
            animate={{opacity: 1, scale: 1.1}}
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
            }}
            
            >
                <img src={profilePicture}></img>
            </ProfileDiv>
        </HeroContainer>

        </>
    )
}

export default Hero