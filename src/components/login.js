import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    Login =()=>{
        localStorage.setItem('login', true);
        navigate('/')
    }
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if (login) {
            navigate('/');
        }
    })
  return (
    <div>
          <h1> Login </h1> <br /><br />
          <h2>Username :</h2>
        <input type="text" /> <br/><br/>
        <h2>Password :</h2>
        <input type="password" />  <br/><br/>
        <button type="submit" onClick={Login()}>Log In </button>
    </div>
  )
}
