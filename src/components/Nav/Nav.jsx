import React, { useEffect, useRef } from 'react';
import './Nav.css';
import Logo from "../Logo/Logo";
import Menu from "./Menu/Menu";
import List from "./List/List";

function Nav() {
  const nav = useRef(null);

  useEffect(() => {
    window.onscroll = function() {
      if (window.scrollY < 100) {
        nav.current.classList.remove("active");
      } else {
        nav.current.classList.add("active");
      }
    };
  }, []);

  return (
    <nav className='nav' ref={nav}>
      <Logo size="125px" />
      <Menu />
      <List type="list-big" />
      <List type="list-small" />
      <div className='nav-point'></div>
    </nav>
  );
}

export default Nav;
