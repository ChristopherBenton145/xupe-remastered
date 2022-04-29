import React, { memo } from 'react';
import './List.css';
import { gotoSection } from '../Nav';

function List({ type, color = '#000' }) {
  return (
    <ul className={type} style={{ '--color': color }}>
      <li className='active' onClick={() => gotoSection(document.querySelector('.p'))}>Home</li>
      <li onClick={() => gotoSection(document.querySelector('.content'))}>About</li>
      <li onClick={() => gotoSection(document.querySelector('.p'))}>Projects</li>
      <li onClick={() => gotoSection(document.querySelector('.p'))}>Team</li>
      <li onClick={() => gotoSection(document.querySelector('.p'))}>News</li>
    </ul>
  );
}

export default memo(List);
