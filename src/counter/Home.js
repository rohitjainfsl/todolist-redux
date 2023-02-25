import React, { useState } from 'react'

function Home() {

  // const counter = 0;
  // function setCounter(temp){
  //   counter = temp;
  // }

  const [counter, setCounter] = useState(0)

  // let counter = 100

  function increment(){
    // counter++
    setCounter(counter + 1)
  }
  function decrement(){
    // counter--
    setCounter(counter - 1)
  }

  

  return (
    <div className='counter'>
      <button onClick={increment}>+</button>
      <p>{counter}</p>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Home