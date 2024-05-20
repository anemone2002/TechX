import React from 'react'
import '../components/Home.css'
import videoSource from '../assets/images/phone video.webm';


const Home = () => {
  return (
    <div className="home">
    <div className="video-container">
      <video autoPlay loop muted className="video-background">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to TechTrek</h1>
        <p>We are happy to anounce Tech Trek X</p>
      </div>
    </div>
    </div>
  )
}

export default Home