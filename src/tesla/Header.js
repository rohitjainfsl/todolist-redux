import React, { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function menuOpen(e) {
    e.preventDefault();
    setShowMenu(true);
  }
  function menuClose() {
    setShowMenu(false);
  }

  return (
    <header>
      <img src="images/logo.svg"></img>

      <ul>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panel</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <li onClick={menuOpen}>
          <a href="">Menu</a>
        </li>
      </ul>

      <ul className="sidebar" style={{right: (showMenu) ? '0' : '-250px'}}>
        <span className="cross" onClick={menuClose}>&times;</span>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panel</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
