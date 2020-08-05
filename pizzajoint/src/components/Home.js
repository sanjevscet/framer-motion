import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.2, duration: 3}}
    >
      <h2 animate={{}}>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <button animate={{}}>
          Create Your Pizza
        </button>
      </Link>
    </motion.div>
  )
}

export default Home;