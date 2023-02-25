import React from 'react'

function App(props) {
  // console.log(props)
  return (
    // <p>Names are: {props.students.join(",")}</p>

    <ul>
      {/* <li>props.students[0]</li>
      <li>props.students[1]</li>
      <li>props.students[2]</li>
      <li>props.students[3]</li> */}

      {
        props.students.map((student, index) => {
          return <li key={index}>{student}</li>
        })
      }



    </ul>
  )
}

export default App