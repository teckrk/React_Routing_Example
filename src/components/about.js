import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from './navbar'

export default function About() {
  return (
    <div>
      <h1>About page </h1>
      <ul className='about'>
        <li> <NavLink className="about-nav" to="/user/peter"
          state={{ name: "peter", age: 23, position: "developer" }}>
          peter</NavLink> </li>
        <li> <NavLink className="about-nav" to="/user/sonu" state={{ name: "sonu", age: 53, position: "developer" }}
        >sonu</NavLink> </li>
        <li> <NavLink className="about-nav" to="/user/Andrew" state={{ name: "andrew", age: 29, position: "developer" }}>andrew</NavLink> </li>
        <li> <NavLink className="about-nav" to="/user/tanvi" state={{ name: "tanvi", age: 27, position: "developer" }}>tanvi</NavLink> </li>
      </ul>
    </div>
  )
}
