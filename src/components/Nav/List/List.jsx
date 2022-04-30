import React, { memo } from 'react';
import './List.css';
import { gotoSection } from '../Nav';

function List({ type, color = '#000' }) {
  return (
    <ul className={type} style={{ '--color': color }}>
      <li className='active' onClick={() => gotoSection('.header', 1000)}>Home</li>
      <li onClick={() => gotoSection('.services', 1000)}>Services</li>
      <li onClick={() => gotoSection('.projects', 1000)}>Projects</li>
      <li onClick={() => gotoSection('.team', 1000)}>Team</li>
      <li onClick={() => gotoSection('.news', 1000)}>News</li>
    </ul>
  );
}

export default memo(List);
