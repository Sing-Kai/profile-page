import React, { ReactNode } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const Slide = ({ children }: { children: ReactNode }) => {

  const variants = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return(
    <AnimatePresence>
      <motion.div         
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      >
        {children}
      </motion.div>
  </AnimatePresence>
  )
}

export default Slide