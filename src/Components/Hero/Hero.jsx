import React from 'react'
import'./Hero.css'
import hand_icon from '../Assets/Assets/hand_icon.png';
import hero_image from '../Assets/Assets/hero_image.png';
import arrow_icon from '../Assets/Assets/arrow.png';

export const Hero = () => {
  return (
    <div className='hero'> 
    <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div> <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt=""/>
        </div>
        <p>collections</p>
        <p>for everyone</p>
    </div>
    <div className='hero-latest-btn'>Latest Collection</div>
    <img src={arrow_icon} alt="" /></div>
    <div className="hero-right"></div>
    <img src={hero_image} alt="" /></div>
  )
}
export default Hero;