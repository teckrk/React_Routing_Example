import React from 'react'
import { useParams, useLocation } from 'react-router-dom'


export default function User() {
    const location = useLocation();
    console.warn(location);
    const queryParams = new URLSearchParams(location.search);
    const namee = queryParams.get('name'); // e.g., ?name=John
    console.warn("nmae : ", namee); // John
    console.log("query params : ", queryParams);

    const params = useParams();
    const { name } = params;
    console.warn(name);

    return (
        <div>
            <h1> Hello I am <span className='big'> {name} </span> and this is my page. </h1>
            <h3> Age : {location.state.age}</h3>
            <h3>Position : {location.state.position}</h3>
            <p>Full Location Object: {JSON.stringify(location)}</p>
        </div>
    )
}
