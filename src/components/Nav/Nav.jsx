import React, { useEffect, memo } from 'react';
import './Nav.css';
import Logo from "../Logo/Logo";
import Menu from "./Menu/Menu";
import List from "./List/List";
import NavDivider from './NavDivider/NavDivider';
import { toggleMenu } from './Menu/Menu';

export function gotoSection(element) {
  SmoothScroll(element, 350);
  
  if (document.querySelector('.menu').classList.contains('active')) {
    toggleMenu();
  }
}

function SmoothScroll(element, time) {
  const SVS_B = () => window.scrollBy(0, eAmt);
  const eTop = element.getBoundingClientRect().top;
  const eAmt = eTop / 100;
  let curTime = 0;
  
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, 'top');
    curTime += time / 100;
  }
}

function Nav() {
  useEffect(() => {
    const items1 = document.querySelector('.list-big').childNodes;
    const items2 = document.querySelector('.list-small').childNodes;

    window.onscroll = function() {
      if (window.scrollY > 99999) {
        activateMenu(4, items1, items2);
      } else if (window.scrollY > 99999) {
        activateMenu(3, items1, items2);
      } else if (window.scrollY > 99999) {
        activateMenu(2, items1, items2);
      } else if (window.scrollY > 600) {
        activateMenu(1, items1, items2);
      } else {
        activateMenu(0, items1, items2);
      }
    }
  }, []);

  function activateMenu(item, items1, items2) {
    if (!(items1[item].classList.contains('active'))) {
      items1.forEach(item => item.classList.remove('active'));
      items2.forEach(item => item.classList.remove('active'));
      items1[item].classList.add('active');
      items2[item].classList.add('active');
    }
  }

  return (
    <nav className='nav'>
      <Logo size='125px' />
      <Menu size='50px' color='#000' />
      <List type='list-small' color='#000' />
      <List type='list-big' color='#000' />
      <NavDivider color='#fff' rotation='180deg' />
    </nav>
  );
}

export default memo(Nav);
