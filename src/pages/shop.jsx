import React from 'react'
import Hero from "../components/hero/hero"
import Popular from '../components/popular/popular'
import Offer from '../components/offer/offer'
import Newcollection from '../components/newcollection/newcollection'
import Newslatter from "../components/newslatter/newslatter"

const shop = () => {
  return (
    <div className='shop'>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      <Newslatter/>
    
    </div>
  )
}

export default shop;
