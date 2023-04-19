import React, { ReactNode } from 'react'
import { motion } from "framer-motion"

const Hover = ({ children }: { children: ReactNode }) => {

  return(
    <motion.div whileHover={{ scale: 1.1 }}>
      {children}
    </motion.div>
  )
}

export default Hover