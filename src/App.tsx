import EstiloGlobal from './styles'
import { Routes, useLocation, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { useEffect, useRef, useState } from 'react'
import Transition from './components/Transition'
import { AnimatePresence, useInView } from 'framer-motion'
import Background from './components/Background'
import Section from './components/Section'

function App() {
  const location = useLocation()
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setIsActive(false)
    }, 200)
  }, [isActive])

  return (
    <>
      <EstiloGlobal />
      <AnimatePresence>
      <Background/>
      <Section/>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home isActive={isActive}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
