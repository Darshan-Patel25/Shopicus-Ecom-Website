import React from 'react';
import "./blog.css";
import blog11 from "../Accets/blog.png"; // Corrected "Accets" to "Assets"

const Blog = () => {
  return (
    <div className='main'>
      <div className='blog'>
        <div className='blog-left'>
          <h1>Shopicus E-commerce Blog</h1>
          <img src={blog11} alt="Blog cover" width={1000} />
          <p className='p1'>
            How to Customize Online Checkout to improve Shopping Experience & Sales
          </p>
          <p className='p2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet error
            sapiente quo unde pariatur assumenda iure exercitationem vel consectetur
            distinctio temporibus consequatur modi delectus voluptatum, dolorem odit
            voluptas ipsam? aliquid, eum provident maxime at in blanditiis tempora minima
            qui eligendi sed?
          </p>
        </div>
        <div className='blog-right'>
          <input type="text" placeholder='Search on blog' />
          <p className='rp'>Using Psychology in Decision-Making and Sales Content Optimization</p>
          <h3>Marketing and Pro...</h3>
          <hr />
          <p>How to Sell and Advertise on TikTok</p>
          <h3>Sell on TikTok</h3>
          <hr />
          <p>Free Ways to Drive Traffic to Your Online Store</p>
          <h3>Marketing and Pro...</h3>
        </div>
      </div>
      <div className='main2'>
        <iframe
          title="Google Maps Location" // Added title for accessibility
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.689197399454!2d72.95044977507717!3d22.55331257950554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e823a1d38f5%3A0xdd0ac60f36c7365c!2z4Kqq4KuN4Kqw4KuH4Kqu4Kq14Kqk4KuAIOCqsOCrh-CquOCrjeCqn-Cri-CqsOCqqOCrjeCqnw!5e0!3m2!1sgu!2sin!4v1726500433711!5m2!1sgu!2sin"
          width="1900"
          height="450"
          style={{ border: 0 }} // Corrected the style to an object
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Blog;
