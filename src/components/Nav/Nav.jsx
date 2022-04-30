import React, { useEffect, memo } from 'react';
import './Nav.css';
import Logo from "../Logo/Logo";
import Menu from "./Menu/Menu";
import List from "./List/List";
import { toggleMenu } from './Menu/Menu';
import $ from 'jquery';

export function gotoSection(element, time) {
  $('html, body').animate({
    scrollTop: $(element).offset().top
  }, time);

  if (document.querySelector('.menu').classList.contains('active')) {
    toggleMenu();
  }
}

function Nav() {
  useEffect(() => {
    const items1 = document.querySelector('.list-big').childNodes;
    const items2 = document.querySelector('.list-small').childNodes;

    window.onscroll = function() {
      if (onScreen('.header')) {
        activateMenu(0, items1, items2);
      }
    }
  }, []);

  function onScreen(element) {
    const rect = document.querySelector(element).getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

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
      <Logo size='140px' />
      <Menu size='60px' color='#000' />
      <List type='list-small' color='#000' />
      <List type='list-big' color='#000' />
    </nav>
  );
}

export default memo(Nav);
