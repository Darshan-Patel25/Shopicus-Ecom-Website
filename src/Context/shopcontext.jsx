import React, { createContext, useState } from "react";
import all_product from "../components/Accets/all_product";


export const ShopContext = createContext(null);

const grtDefaultCart=()=>{
    let cart={};
    for(let index=0;index<all_product.length+1;index++){
        cart[index]=0
    }
    return cart;

}
const ShopContextProvider = (props) => {

    const [cartItem,setCartItem]=useState(grtDefaultCart());

   

        const addToCart=(itemId)=>{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            console.log(cartItem);
        }

        const removeFromcart=(itemId)=>{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        } 

        const gettotalcartamount=()=>{
            let totalAmount=0;
            for(const item in cartItem){
                if(cartItem[item]>0){
                    let iteminfo=all_product.find((product)=>product.id===Number(item))
                    totalAmount+=iteminfo.new_price*cartItem[item];
                }
                
            }
            return totalAmount;
        }

        const gettotalcartitem=()=>{
            let totalitem=0;
            
            for(const i in cartItem){
                 if(cartItem[i]>0){
                totalitem+=cartItem[i];
               }
             }
            return totalitem;

        }

        const contextValue = { gettotalcartitem,gettotalcartamount,all_product,cartItem,addToCart,removeFromcart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
