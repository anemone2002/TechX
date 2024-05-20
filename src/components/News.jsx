import React from 'react';
import '../components/News.css';
import phone from '../assets/images/phone4.webp';
import head from '../assets/images/head.webp';

const News = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
   
      <div className='news'> 
        <div className='new'>
          <img src={phone} alt="" />
          <div className="caption">
            <h3>TechTrek X Pre-Order Now Available!</h3>
            <button onClick={handleButtonClick}>More Info</button>
          </div>
        </div>
        <div className='new'>
          <img src={head} alt="" />
          <div className="caption">
            <h3>TechTrek X Feature Spotlight: Headphones</h3>
            <button onClick={handleButtonClick}>More Info</button>
          </div>
        </div>
        <div className='new'>
          <img src={phone} alt="" />
          <div className="caption">
            <h3>TechTrek X Pre-Order Now Available!</h3>
            <button onClick={handleButtonClick}>More Info</button>
          </div>
        </div>
      </div>
    
  );
};

export default News;
