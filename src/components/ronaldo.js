import React from 'react'

export default function Ronaldo() {
  return (
      <div className="neymar-container">
          <h1 className="neymar-title">I am Cristiano Ronaldo</h1>
          <p className="neymar-description">
              One of the best football players in the world, known for his skills, creativity, and passion for the game!
          </p>
          <div className="neymar-image-container">
              <img
                  src="https://s1.elespanol.com/2018/11/12/deportes/futbol/cristiano_ronaldo-juventus_de_turin-serie_a_352724829_105585449_1706x960.jpg"
                  alt="Neymar"
                  className="neymar-image"
              />
          </div>
          <button className="neymar-button">Learn More</button>
      </div>
  )
}
