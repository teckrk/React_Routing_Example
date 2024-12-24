import React from 'react'

export default function Messi() {
    return (
        <div className="neymar-container">
            <h1 className="neymar-title">I am Lionel Messi</h1>
            <p className="neymar-description">
                One of the best football players in the world, known for his skills, creativity, and passion for the game!
            </p>
            <div className="neymar-image-container">
                <img
                    src="https://assets.goal.com/images/v3/blt6050872fb70ac173/c7541b5f85c6de977910ce69487cdd94ad37a12f.jpg"
                    alt="Neymar"
                    className="neymar-image"
                />
            </div>
            <button className="neymar-button">Learn More</button>
        </div>
    )
}
