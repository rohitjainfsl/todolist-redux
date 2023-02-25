import React, {useRef, useState} from 'react'

function Home() {
  const inp = useRef()
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([])

  function handleChange(e){
    setInputValue(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    setTasks([...tasks, inputValue])
    setInputValue('')
    inp.current.focus()
  }

  return (
    <div className='todo'>
      <form onSubmit={handleSubmit}>
        <input ref={inp} value={inputValue} onChange={handleChange} type='text' placeholder='Enter your task' />
        <button type='submit'>Add Task</button>
      </form>

      <ul>
        {
          tasks.map((elem, index) => {
            return (
              <li key={index}>{elem}</li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default Home