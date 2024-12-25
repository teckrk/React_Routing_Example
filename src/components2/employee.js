import React, { useEffect, useState } from "react";

export default function Employee() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://dummyapi.online/api/movies");
                const result = await res.json();
                setData(result);
                console.log("Data fetched successfully");
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Movies</h1>
            <table className="table-auto border border-collapse border-gray-400 mx-auto my-4">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">ID</th>
                        <th className="border border-gray-400 px-4 py-2">Name</th>
                        <th className="border border-gray-400 px-4 py-2">Ratings</th>
                        <th className="border border-gray-400 px-4 py-2">IMDB</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((movie, index) => (
                        <tr key={index}>
                            <td className="border border-gray-400 px-4 py-2">{movie.id}</td>
                            <td className="border border-gray-400 px-4 py-2">{movie.movie}</td>
                            <td className="border border-gray-400 px-4 py-2">{movie.rating}</td>
                            <td className="border border-gray-400 px-4 py-2">{movie.image}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
