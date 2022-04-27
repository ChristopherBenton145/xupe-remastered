import React from 'react';
import "./Menu.css";

export function toggleMenu() {
  document.querySelector(".menu").classList.toggle("active");
  document.querySelector(".list-small").classList.toggle("active");
}

function Menu() {
  return (
    <div className='menu' onClick={() => toggleMenu()} />
  );
}

export default Menu;
