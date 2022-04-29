import React, { memo } from 'react';
import './Divider.css';
import dividerTypes from './types';

function Divider({ type, position = 'top: 0', rotation = '0deg', color = '#000', height = '300px' }) {
  return (
    <div dangerouslySetInnerHTML={{__html: dividerTypes(type, position, rotation, color, height)}} />
  );
}

export default memo(Divider);
