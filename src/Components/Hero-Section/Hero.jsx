import React from 'react'
import './Hero.css'
import black from '../../assets/black.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import img from '../../assets/img.svg'


function Hero() {
  return (
    <>
    <div className='img-section'>
    <div className='images'>
    <img src={black} alt=""  height='500px' />
    <div className='img-text'>
    <img src={img2} alt=""  />
    <div className='h1-btn'>
        <h1>ULTIMATE</h1>
        <h2>SALE</h2>
        <p>NEW COLLECTION</p>
        <button>SHOP NOW</button>
    </div>
    <img src={img3} alt="" />
    </div>
    <div>
<img src={img} alt=""  height='500px' />
    </div>
    
    
    </div>
    
    </div>
    
    </>
    
  )
}

export default Hero