import React from 'react';
import "./List.css";
import { toggleMenu } from "../Menu/Menu"

function List({ type }) {
  return (
    <ul className={type}>
      <a href='#home' onClick={() => toggleMenu()}><li>Home</li></a>
      <a href='#services' onClick={() => toggleMenu()}><li>Services</li></a>
      <a href='#projects' onClick={() => toggleMenu()}><li>Projects</li></a>
      <a href='#team' onClick={() => toggleMenu()}><li>Team</li></a>
  </ul>
  );
}

export default List;
