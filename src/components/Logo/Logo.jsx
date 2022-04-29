import React, { memo } from 'react';
import logo from '../../assets/images/logo.png';

function Logo({ size }) {
  return (
    <img src={logo} width={size} alt='logo' />
  );
}

export default memo(Logo);
