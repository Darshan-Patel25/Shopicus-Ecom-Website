import React from 'react'
import "./newslatter.css"
const newslatter = () => {
  return (
    <div className='newslatter'>
        <div id="two">
      <h1>Get Exclusive Offer in Your Email</h1>
      <p>subscribe to our newlatter and stay update</p></div>
      <div id="one">
        <input type="email" placeholder='Enter Your Email Id' id="email"  required/>
        <button type='submit'>Subscribe</button>
      </div>
    </div>
  )
}

export default newslatter
