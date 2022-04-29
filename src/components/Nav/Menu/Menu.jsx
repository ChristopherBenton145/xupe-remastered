import React, { memo } from 'react';
import './Menu.css';

export function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
  document.querySelector('.list-small').classList.toggle('active');
}

function Menu({ size = '50px', color = '#000' }) {
  const styles = {
    width: size,
    height: size,
  }

  return (
    <div className='menu' onClick={() => toggleMenu()} style={styles}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <title>Menu Open</title>
        <path stroke={color} strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M80 160h352M80 256h352M80 352h352'/>
      </svg>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <title>Menu Close</title>
        <path stroke={color} strokeLinecap='round' strokeinejoin='round' strokeWidth='32' d='M368 368L144 144M368 144L144 368'/>
      </svg>
    </div>
  );
}

export default memo(Menu);
