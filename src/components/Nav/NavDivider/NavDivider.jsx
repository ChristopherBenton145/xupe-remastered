import React, { memo } from 'react';
import './NavDivider.css';

function NavDivider({ color = "#fff", rotation = "0deg" }) {
  const styles = {
    fill: color,
    transform: `rotate(${rotation})`
  }

  return (
    <svg className='nav-divider' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 25" preserveAspectRatio="none" style={styles}>
      <title>Book</title>
      <path d="M0,177.36s194.23-1.13,213-5.44c34.74-7.95,37-18.34,37-18.34s2,11.25,30.5,18.24C301.44,177,500,177.36,500,177.36V200H0Z" transform="translate(0 -153.58)" />
    </svg>

  );
}

export default memo(NavDivider);
