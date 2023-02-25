// useCallback is used to memoize a function that is passed as a prop to a child component. It helps to avoid unnecessary re-renders of the child component.


//useMemo takes a function as input and returns the return value of that function,
//useCallback takes a function as input and returns that very function,

import React, { useCallback, useState } from "react";

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log('Button clicked!');
//     setCount((prevCount) => prevCount + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }
// export default MyComponent

// By using useCallback, we ensure that the handleClick function is only recreated when its dependencies change, which in this case is count. This can improve the performance of our component, especially if the function is expensive to create or if it's passed down to child components that re-render frequently.





function MyComponent() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' }
  ]);

  const handleRemoveItem = useCallback((id) => {
    console.log("Hello")
    setItems(items.filter(item => item.id !== id));
  }, [items]);

  return (
    <div>
      <h1>Items:</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;

// By using useCallback, we ensure that the handleRemoveItem function is only recreated when the items array changes.
// Without using useCallback, a new function would be created for each item in the list every time the parent component re-renders, even if the items array hasn't changed.
