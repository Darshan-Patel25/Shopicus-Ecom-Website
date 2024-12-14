import React from 'react'
import "./css/shopcategory.css"
//import {shopcontext} from "../Context/shopcontext"
import Item from "../components/item/item"
import Ap from "../components/Accets/all_product"



 const Shopcategory = (props) => {
 
  
  return (
    <div className='shopcategory'>
      <img src={props.banner} alt="banner" id="banner"/>
      <div className="shopcategory-indexsort">
        <p>
          <span >Showing 1-12</span>out of 16 products
        </p>
        <div className="shopcategory-sort">
          Sort by 
        </div>
      </div>
      <div className="shopcategory-products">
        {Ap
          .filter((item) => item.category === props.category)
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
      <div className="explore" >
        Explore more
       
      </div>
    </div>
  )
}

export default Shopcategory
