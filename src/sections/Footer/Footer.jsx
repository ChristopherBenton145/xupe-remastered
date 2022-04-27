import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content'>
            <div className='divider1' />
            <div className='divider2' />
            <h5>Join our newsletter</h5>
            <p>Let's stay connected! Receive a special offer just for signing up. Also, we'll send updates straight to your inbox.</p>
            <div>
            <input type="text" placeholder='youremail@domain.com' autoComplete='off' />
            <button>SUBSCRIBE</button>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
