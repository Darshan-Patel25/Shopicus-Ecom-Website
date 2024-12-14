import React from 'react'
import {Link} from 'react-router-dom'

import "./item.css"
const item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""  height={400} width={330} /></Link>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new">
        ${props.old_price}
        </div>
        <div className="item-price-old">
        ${props.new_price}
        </div>
      </div>
    </div>
  )
}

export default item
