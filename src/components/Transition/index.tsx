import { AnimatePresence } from 'framer-motion'
import { Logo, SlideIn,} from './style'
import {motion} from 'framer-motion'

type Props = {
  isActive: boolean
}

const Transition = ({isActive}: Props) => {
  return (
    <>
      <AnimatePresence>
        {isActive && (
          <>
          <SlideIn
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: -2000 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          <Logo
          initial={{scale: 1}}
          animate={{scale: 1.1}}
          exit={{scale: 0}}
          >
            <motion.h2
            initial={{scale: 1.1}}
            exit={{scale: 0}}
            >GH</motion.h2>
          </Logo>

            </>
        )}

      </AnimatePresence>
    </>
  )
}

export default Transition
