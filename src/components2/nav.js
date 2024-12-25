import React from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/employee">Employee</Link>
        </div>
    )
}
