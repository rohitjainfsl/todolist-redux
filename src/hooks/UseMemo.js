//useMemo is used to memoize a value or a function that takes a long time to compute. It helps to avoid expensive computations on every render.

// useMemo and useEffect have different use cases and should be used for different purposes. If you need to compute a value that depends on some input values and avoid recomputing it unnecessarily, use useMemo. If you need to perform a side effect that updates the state of the component or interacts with external APIs or libraries, use useEffect.

import React, { useState, useMemo, useEffect } from "react";

function MyComponent() {
  const [num, setNum] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  function handleChange(e) {
    setNum(Number(e.target.value));
  }

  function handleThemeChange(e) {
    setDarkTheme(darkTheme ? false : true);
  }

  const square = calculateSquare(num);

  function calculateSquare(num) {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * num;
  }

  const style = useMemo(() => {
    return {
      backgroundColor: darkTheme ? "#000" : "#fff",
      color: darkTheme ? "#fff" : "#000",
    };
  }, [darkTheme]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [style]);

  return (
    <div>
      <input type="number" value={num} onChange={handleChange} />
      <button onClick={handleThemeChange}>Change Theme</button>
      <p style={style}>{square}</p>
    </div>
  );
}
export default MyComponent;

// import React, { useState, useMemo } from 'react';

// function Example() {
//   const [count, setCount] = useState(0);
//   const doubleCount = useMemo(() => {
//     console.log('Computing doubleCount...');
//     return count * 2;
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Double Count: {doubleCount}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </div>
//   );
// }

// export default Example;
