import React, { ReactNode } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const EaseIn = ({ children }: { children: ReactNode }) => {

  return(
    <AnimatePresence>
      <motion.div         
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
  </AnimatePresence>
  )
}

export default EaseIn