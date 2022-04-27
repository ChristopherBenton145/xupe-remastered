import React from 'react';
import './Header.css';
import Nav from "../../components/Nav/Nav";
// import image from "./mobile-background.png"
// src={image}
import image from "./test2.svg";

function Header() {
  return (
    <>
    <header className='header'>
      <Nav />
      {/* <img src={image} /> */}
        <div className='div3'></div>
    </header>
    <section className='about'>
      {/* <div className='div'></div> */}
      <div className='div2'></div>
    </section>
    </>
  );
}

export default Header;
