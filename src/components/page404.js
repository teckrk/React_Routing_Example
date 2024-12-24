import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div>
          <h1>page404</h1>
          <p> this is not available</p>
          <p> <Link to="/">Go to Home Page</Link> </p>
    </div>
  )
}
