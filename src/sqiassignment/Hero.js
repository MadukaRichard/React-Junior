import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <div className="hero"> 
      <div className="container">
        <div className="row align-items-center"> 
  
          <div className="col-md-6 hero-left">
            <h2 className='hero-big'>Study to become a global talent</h2>
            <p className="lead">Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
            <button >Start Now</button>
          </div>
          <div className="col-md-6 hero-right text-center">
            <img src="https://sqi.edu.ng/wp-content/uploads/2023/06/bg-header-sqi-1.png" alt="Student" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;