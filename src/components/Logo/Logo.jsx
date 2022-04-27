import React from 'react';
import logo from "../../assets/images/logo.png";

function Logo({ size }) {
  return (
    <img src={logo} width={size} />
  );
}

export default Logo;
