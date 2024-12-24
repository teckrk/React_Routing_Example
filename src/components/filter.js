import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const age = searchParams.get('age');
    console.log(age);
    const city = searchParams.get('city');
    console.log(age);
    return (
        <div>
            <h1>Filter Page</h1>
            <h5>age is : {age}</h5>
            <h5>city is : {city}</h5>
            <input type='text' onChange={(e) => 
                setSearchParams({ text: e.target.value, age: 50, city: 'jammu'})} 
                />
            <button onClick={() => setSearchParams({ age: 30, city: 'delhi' })}>
                change filters
            </button>
        </div>

    )
}
