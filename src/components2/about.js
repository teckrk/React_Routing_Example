import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
      <div>
        <h1>about</h1>
        <Link to="/users/andrew">Andrew</Link> |
        <Link to="/users/rohan">rohan</Link>  |
        <Link to="/users/sourav">sourav</Link>
      </div>
  )
}
