import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Users() {
    const params = useParams();
    const { name } = params;
    console.warn(name);
    return (
        <div>
            <h1> Hello I am {name} and this is my page. </h1>
            <Link to="/about" >Go to About</Link>
        </div>
    )
}
