import React, { memo } from 'react';

function Logo({ type, size }) {
  return (
    <img src={type} width={size} alt='Logo' />
  );
}

export default memo(Logo);
