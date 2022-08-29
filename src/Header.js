import React from 'react'
import './header.css';

function Header() {
  return (
    <div className='header'>
         <div className='leftside'>
                <img id='logo' src='./images/logo.jpg' alt='picture' />
                <div id='gap'></div>
                <div><p id="Header_title">HOME ELECTRIFICATION MARKETPLACE</p></div>
            </div>
            <div className='rightside'>
                <div><img className='call' src='./images/call.jpg' alt='custom' /></div>

                <div className='number'><p>888-454-9979</p></div>
                <div className='Header_sign'><p>Sign In</p></div>

            </div>
      
    </div>
  )
}

export default Header
