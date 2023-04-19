import React, { ReactNode } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const Slide = (props: any) => {

  const {children, direction} = props

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? 60 : -60,
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