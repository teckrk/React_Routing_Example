import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Home from './home'
import About from './about'

export default function Navbar() {
     
    return (
        <div>
            <ul className='navContainer'>
                <li> <NavLink className="navbar" to="/"> Home</NavLink>  </li>
                <li> <NavLink className="navbar" to="/about"> about</NavLink>  </li>
                <li> <NavLink className="navbar" to="/contact"> contact</NavLink>  </li>
                <li> <NavLink className="navbar" to="/blog">  blog</NavLink>  </li>
                <li> <NavLink className="navbar" to="/filter">  filter</NavLink>  </li>
                <li> <NavLink className="navbar" to="/footballers">  Footballers</NavLink>  </li>
                <li> <NavLink className="navbar" to="/login">  Login</NavLink>  </li>
                
            </ul>

        </div>
    )
}
