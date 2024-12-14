import React from 'react'

import "./css/loginsignup.css"


const loginsignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Signup</h1>
            <div className="field" >
                <input type="text" placeholder=' your name' required/>
                <input type="email" placeholder=' your Email' required/>
                <input type="password" placeholder='Password' required/>
            </div>
            <button>Continue</button>
            <p className="login">Already have an Account <span>signin here</span></p>
            <div className="agree">
                <input type="checkbox" />
                <p>By continue, i agree to the  terms of use  & privacy policy</p>
            </div>
        </div>
      
    </div>
  )
}

export default loginsignup
