import bgvideo from '../../assets/videos/bg-main.mp4'
import { Section } from './style'

const Background = () => {
  return (
    <>
      <Section className="container">
        <video autoPlay muted loop playsInline src={bgvideo} />
      </Section>
    </>
  )
}

export default Background
