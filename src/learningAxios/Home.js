import React, { useState } from 'react'
import axios from 'axios'

function Home() {
  const [randomData, setRandomData] = useState([])

  function getRandomData(e) {
    axios.get('https://randomuser.me/api/')
      .then((result) => {
        console.log(result.data.results)
        setRandomData(result.data.results)
      })
  }


  function DisplayData() {
    return (
      randomData.map((elem, index) => {
        return (
          <div className='random'>
            <img src={elem.picture.large}></img>
            <h3>{elem.name.first + " " + elem.name.last}</h3>
          </div>
        )
      })
    )
  }
  return (
    <>
      <h1>Axios</h1>

      <button onClick={getRandomData}>Get Random Data</button>
      <DisplayData />
    </>
  )
}

export default Home