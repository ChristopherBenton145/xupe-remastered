import React, { memo } from 'react';
import './List.css';
import { gotoSection } from '../Nav';

function List({ type, color = '#000' }) {
  return (
    <ul className={type} style={{ '--color': color }}>
      <li className='active' onClick={() => gotoSection(document.querySelector('.header'))}>Home</li>
      <li onClick={() => gotoSection(document.querySelector('.about'))}>About</li>
      <li onClick={() => gotoSection(document.querySelector('.projects'))}>Projects</li>
      <li onClick={() => gotoSection(document.querySelector('.team'))}>Team</li>
      <li onClick={() => gotoSection(document.querySelector('.news'))}>News</li>
    </ul>
  );
}

export default memo(List);
