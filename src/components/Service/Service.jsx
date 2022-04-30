import React, { memo } from 'react';
import './Service.css';

function Service({ image, title, text }) {
  return (
    <div className='service'>
      <img src={image} alt='Service' />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default memo(Service);
