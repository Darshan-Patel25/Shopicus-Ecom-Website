import React, { useContext } from 'react';
import "./cartItem.css";
import { ShopContext } from '../../Context/shopcontext';
import remove from "../Accets/remove.png";


const CartItem = () => {
    const { gettotalcartamount,all_product, cartItem, removeFromcart } = useContext(ShopContext);

    const succ=()=>{
      alert("Your payment is successful")
    }

    return (
        <div className='cartitem '>
            <div className="cartitem-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitem-format cartitem-format-main">
                                <img src={e.image} alt="" className='cartitem-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                                <p>${e.new_price * cartItem[e.id]}</p>
                                <img  className='cartitem-remove-icon' src={remove}  id="io"  alt="" onClick={() => removeFromcart(e.id)} />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartitem-down">
              <div className="cartitem-total">
                <h1>Cart Total</h1>
                  <div>
                    <div className="cartitem-total-item">
                      <p>Subtotal</p>
                      <p>${gettotalcartamount()}</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                      <p>Shipping Fee</p>
                      <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                      <h3>Total</h3>
                      <h3>${gettotalcartamount()}</h3>
                    </div>
                  </div>
                  <button onClick={succ}>PROCEED TO CHECKOUT</button>
              </div>
              <div className="cartitem-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitem-promobox">
                  <input type="text" placeholder='promo code'/>
                  <button>submit</button>
                </div>
              </div>
            </div>
        </div>
    );
}

export default CartItem;
