import React, { useContext } from 'react';
import "./productdisplay.css";
import star from "../Accets/star.png";
import { ShopContext } from '../../Context/shopcontext';

const ProductDisplay = (props) => {  // Updated component name
    const { product } = props;
    const { addToCart } = useContext(ShopContext); // Valid use of useContext

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star} height={40} width={25} alt="" />
                    <img src={star} height={40} width={25} alt="" />
                    <img src={star} height={40} width={25} alt="" />
                    <img src={star} height={40} width={25} alt="" />
                    <img src={star} height={40} width={25} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">${product.old_price}</div>
                    <div className="productdisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Tell the product story so the customer can visualize the product in their life.
                    Include accurate sizing information while also providing details about the fit. 
                    Specify the materials used in the clothing item.
                </div>
                <div className="productdisplay-right-sizes">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id); }}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category:</span> WOMEN, T-Shirt, CROP TOP</p>
                <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay; // Updated export
