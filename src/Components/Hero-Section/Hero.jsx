import React from 'react'
import './Hero.css'
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import img4 from '../../assets/img4.svg'


function Hero() {
  return (
    <>
    <div className='img-section'>
    <div className='images'>
    <img src={img1} alt=""  />
    <div className='img-text'>
    <img src={img2} alt="" />
    <div className='h1-btn'>
        <h1>ULTIMATE</h1>
        <h2>SALE</h2>
        <p>NEW COLLECTION</p>
        <button>SHOP NOW</button>
    </div>
    <img src={img3} alt="" />
    </div>
    <div>
<img src={img4} alt=""   />
    </div>
    
    
    </div>
    
    </div>
    
    </>
    
  )
}

export default Hero