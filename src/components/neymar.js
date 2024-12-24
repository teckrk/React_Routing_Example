import React from 'react';

export default function Neymar() {
    return (
        <div className="neymar-container">
            <h1 className="neymar-title">I am Neymar</h1>
            <p className="neymar-description">
                One of the best football players in the world, known for his skills, creativity, and passion for the game!
            </p>
            <div className="neymar-image-container">
                <img
                    src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7NBXJ3TU5JL7NHRRJJDS3U3WDY.jpg"
                    alt="Neymar"
                    className="neymar-image"
                />
            </div>
            <button className="neymar-button">Learn More</button>
        </div>
    );
}

