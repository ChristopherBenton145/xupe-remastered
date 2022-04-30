import React, { memo } from 'react';
import './Divider.css';

function Divider({ type }) {
  return (
    <div dangerouslySetInnerHTML={{__html: type}} />
  );
}

export default memo(Divider);
