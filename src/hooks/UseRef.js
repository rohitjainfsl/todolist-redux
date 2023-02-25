// useRef is a React Hook that lets you reference a value that’s not needed for rendering.

import React, { useEffect, useRef, useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  // const childRef = useRef();

  // const handleClick = () => {
  //   // console.log(childRef.current.value); // access the input value of ChildComponent
  //   childRef.current.focus(); // focus the input of ChildComponent
  //   setTimeout(() => {
  //       console.log(childRef.current.getValue()); // access the input value of ChildComponent
  //     }, 1000);
  // };

  // return (
  //   <div>
  //     <ChildComponent ref={childRef} />
  //     <button onClick={handleClick}>Focus Input</button>
  //   </div>
  // );

  const count = useRef(1);
  // const inputRef = useRef(null);
  const [name, setName] = useState("");
  useEffect(() => {
    count.current = count.current + 1;
  }, [name]);

  // function handleClick(){
  //   inputRef.current.focus()
  // }


  return (
    <>
      
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // ref={inputRef}
        />
        <p>{name}</p>
        {/* <button onClick={handleClick}>Click Me</button> */}
      
      <div>I rendered {count.current} times</div>
    </>
  );
}

export default ParentComponent;

// function MyComponent() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   );
// }
