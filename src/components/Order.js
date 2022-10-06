import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Order = ({ pizza }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}

      <Link to="/">
      <motion.button
        whileHover={{ 
        scale: 1.1, 
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)" }}
      >
        Back to Home
      </motion.button>
      </Link>
    </div>

  )
}

export default Order;