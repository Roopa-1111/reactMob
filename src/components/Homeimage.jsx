import React from 'react'
import './Homeimage.css'
import Curlygirl from '../assets/curlgirl.png' 
function Homeimage() {
  return (
    <div className='container-fluid'>
      <h5>SUMMER 2020</h5>
      <h1>NEW COLLECTION</h1>
      <h4>We know how large objects will act, 
but things on a small scale.</h4>
<button className='primary-btn'>
    <h3>SHOP NOW</h3>
</button>
<div className="container_image">
<img src={Curlygirl} />
         </div>
</div>

  )
}

export default Homeimage
