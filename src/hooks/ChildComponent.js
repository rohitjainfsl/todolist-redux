import React, { useRef } from "react";

const ChildComponent = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    React.useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      getValue: () => {
        return inputRef.current.value;
      },
    }));
  
    return <input type="text" ref={inputRef} />;
  });
export default ChildComponent  
  
