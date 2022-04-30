import React, { memo } from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';
import Divider from '../../components/Divider/Divider';
import typeClouds from '../../components/Divider/types/typeClouds';
import { gotoSection } from '../../components/Nav/Nav';

function Header() {
  return (
    <header className='header'>
      <Nav />
      <div className="container">
        <h1>We create spectacular digital solutions.</h1>
        <h2>Xupe is a web devlopment company building modern web applications for small to medium-sized businesses and startups.</h2>
        <button onClick={() => gotoSection('.about', 500)}>Get Started</button>
      </div>
      <Divider type={typeClouds(``, { height: '250px', color: '#fff', position: 'bottom' })} />
    </header>
  );
}

export default memo(Header);
