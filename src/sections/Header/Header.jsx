import React from 'react';
import './Header.css';
import Nav from "../../components/Nav/Nav";

function Header() {
  return (
    <header className='header' id="home">
      <Nav />
      <div className='content'>
        <h2>We create spectacular digital solutions.</h2>
        <h3>Xupe is a web devlopment company building modern web applications for small to medium-sized businesses and startups.</h3>
        <button>Get Started</button>
      </div>
      <div className='divider1' />
    </header>
  );
}

export default Header;
