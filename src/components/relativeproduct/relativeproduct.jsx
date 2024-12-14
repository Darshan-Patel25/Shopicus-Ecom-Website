import React from 'react'
import "./relativeproduct.css"
import data from "../Accets/data"
import Item from "../item/item"
const relativeproduct = () => {
  return (
    <div className='relativeproduct'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproduct-item">
        {data.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image } new_price={item.new_price} old_price={item.old_price}/>   
        })
        }
      </div>
    </div>
  )
}

export default relativeproduct
