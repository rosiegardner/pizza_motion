import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}>
      <h2>
        Welcome to Pizza Motion
      </h2>
      <Link to="/base">
        <motion.button 
          whileHover={{ 
          scale: 1.1, 
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)" }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;
//rotateZ: 20, opacity: 0.2, marginTop: 200
//scale: 1.5 