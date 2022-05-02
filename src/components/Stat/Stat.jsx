import React, { memo } from 'react';
import './Stat.css';

function Stat({ title, amount }) {
  return (
    <div className="stat">
      <h4>{amount}</h4>
      <p>{title}</p>
    </div>
  );
}

export default memo(Stat);
