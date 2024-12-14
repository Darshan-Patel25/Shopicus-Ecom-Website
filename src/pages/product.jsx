import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from "../Context/shopcontext";
 import Breadcrum from '../components/breadcrums/breadcrums';
import Productdisplay from '../components/productdisplay/productdisplay';
import DiscriptionBox from '../components/discriptionBox/discriptionBox';
import Relativeproduct from '../components/relativeproduct/relativeproduct';
const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    // Convert productId to a number and find the product
    const product = all_product.find((e) => e.id === Number(productId));

    // Handle the case where product is not found
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='product'>
            <Breadcrum product={product}/>
            <Productdisplay product={product} />
            <DiscriptionBox/>
            <Relativeproduct/>
        </div>
    );
};

export default Product;
