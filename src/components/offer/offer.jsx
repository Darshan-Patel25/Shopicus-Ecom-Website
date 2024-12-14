import React from 'react'
import "./offer.css"
import so from "../Accets/so.gif"

const offer = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
          <h1>Exclusive</h1>
          <h1>offer for you</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button >Check Now</button>
      </div>
      <div className="offer-right">

        <img src= {so} alt="" />
      </div>
    </div>
  )
}

export default offer
