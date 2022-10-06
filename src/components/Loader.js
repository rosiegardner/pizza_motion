import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -20],
    transition: {
      x: {
        repeat: Infinity,
        duration: 0.5
      },
      y: {
        repeat: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.40,
        ease: 'easeOut'
      }
    }
  }
}
const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <React.Fragment>
      <motion.div className="loader"
      variants={loaderVariants}
      animate={animation}
      >
      </motion.div>
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </React.Fragment>
  )
}

export default Loader;