import React from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -20],
    transition: {
      x: {
        repeat: Infinity,
        duration: 0.8
      },
      y: {
        repeat: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
}
const Loader = () => {
  return (
    <React.Fragment>
      <motion.div className="loader"
      variants={loaderVariants}
      animate="animationOne"
      >

      </motion.div>
    </React.Fragment>
  )
}

export default Loader;