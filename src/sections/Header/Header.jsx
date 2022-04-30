import React, { memo } from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';
import Divider from '../../components/Divider/Divider';
import { gotoSection } from '../../components/Nav/Nav';

function Header() {
  return (
    <header className='header'>
      <Nav />
      {/* <div className='content'>
        <h2>We create spectacular digital solutions.</h2>
        <h3>Xupe is a web devlopment company building modern web applications for small to medium-sized businesses and startups.</h3>
        <button onClick={() => gotoSection(document.querySelector('.about'))}>GET STARTED</button>
      </div>
      <Divider type='clouds' position='bottom: 0' rotation='0deg' color='#fff' height='300px' /> */}
    </header>
  );
}

export default memo(Header);
