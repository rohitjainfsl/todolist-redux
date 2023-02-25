import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Main() {
  return (
    <>
      <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>


    <Outlet />
    </>
  )
}

export default Main