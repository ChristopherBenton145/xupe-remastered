import React, { memo } from 'react';
import whiteLogo from '../../assets/images/white-logo.png';
import blackLogo from '../../assets/images/black-logo.png';

function Logo({ size }) {
  return (
    <img src={blackLogo} width={size} alt='Logo' />
  );
}

export default memo(Logo);
