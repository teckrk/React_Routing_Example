import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Footballers() {
  return (
    <div>
        <h1>Footballers</h1>
        <p>This is the footballers page.</p>

        <Link className='f-btn' to="neymar">NEYMAR JR</Link>
        <Link className='f-btn' to="messi">LIONEL MESSI</Link>
        <Link className='f-btn' to="ronaldo">CRISTIANO RONALDO</Link>
         

        <Outlet></Outlet>
        
    </div>
  )
}
