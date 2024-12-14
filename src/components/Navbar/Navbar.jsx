import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from "../Accets/logo.jpeg"
import { ShopContext } from '../../Context/shopcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Navbar=()=> {
  const [menu,setMenu]=useState("shop");
  const {gettotalcartitem}=useContext(ShopContext)
  return (
    <>
      <div className='navbar'>
       <div className="nav-logo">
       <img src={logo} alt="" width={100} height={100} />
        <p>Shopicus</p>
       </div>
       <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to="/" style={{textDecoration:"none",color:"black"}}>shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Mens")}}><Link to="/mens" style={{textDecoration:"none",color:"black"}}>mens</Link>{menu==="Mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link to="/womens" style={{textDecoration:"none",color:"black"}}>womens</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link to="/kids" style={{textDecoration:"none",color:"black"}}>kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("blog")}}><Link to="/blog" style={{textDecoration:"none",color:"black"}}>Blog</Link>{menu==="blog"?<hr/>:<></>}</li>
       </ul>
       <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} fontSize={40} color='black' id="navlogo"/></Link>
        <div className="nav-cart-count">{gettotalcartitem()}</div>
       </div>
    
      </div>
    </>
  )
}
export default Navbar;