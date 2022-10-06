import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home container">
      <h2>Welcome to Pizza Motion</h2>
      <Link to="/base">
        <button>
          Create Your Pizza
        </button>
      </Link>
    </div>
  )
}

export default Home;