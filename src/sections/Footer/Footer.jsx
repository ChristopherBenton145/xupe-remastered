import React from 'react';
import './Footer.css';
import Logo from '../../components/Logo/Logo'
import whiteLogo from '../../assets/images/white-logo.png';
import { gotoSection } from '../../components/Nav/Nav';

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div>
          <Logo type={whiteLogo} size='140px' />
          <p>We plan, design and devlop functional websites and digital products for your business</p>
        </div>
        <div>
          <ul>
            <h5>Resources</h5>
            <li onClick={() => gotoSection('.header', 1000)}>Home</li>
            <li onClick={() => gotoSection('.services', 1000)}>Services</li>
            <li onClick={() => gotoSection('.news', 1000)}>Our News</li>
            <li onClick={() => gotoSection('.team', 1000)}>Our Team</li>
          </ul>
          <ul>
            <h5>Agency</h5>
            <li>About</li>
            <li>Carrers</li>
            <li>Customers</li>
            <li>Brand Kit</li>
          </ul>
        </div>
        <div>
          <h4>Join our newsletter</h4>
          <p>Let's stay connected! Receive a special offer just for signing up. Also, we'll send updates straight to your inbox.</p>
          <div>
            <input type='text' placeholder='Your Email' autoComplete='off' />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
