import React from 'react'
import logos from '../../assets/logos.svg'
import  './Logo.css'

function Logo() {
  return (
    <div>
        <img src={logos} alt=""  className='img-logos'/>
    </div>
  )
}

export default Logo