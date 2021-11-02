import React, { useState, useEffect } from 'react';


const Home = (props) => {

  const [melonChart, setMelonChart] = useState();

  useEffect(() => {
    fetch('https://corsanywhere.herokuapp.com/https://melon.danielko.me/api/v1/chart/live', {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(res => res.json())
      .then(json => {
        const dataToArr = Object.entries(json).map((e) =>  e[1]);
        setMelonChart(dataToArr);
      })
    }, [])
    console.log(melonChart);
  
  return (
    <>
     {melonChart && melonChart.map(track => {
    return <li>{track.ranking}. {track.name} - {track.artists}</li>
  })}
    
    </>
  )
}

export default Home;