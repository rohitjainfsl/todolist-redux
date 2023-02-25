// The main difference between them is when they run relative to the rendering of the component.

// useEffect runs after the component has been rendered and painted to the screen. This means that it does not block the browser from rendering and painting the component, and any updates to the DOM that it makes may not be visible until the next frame.

// useLayoutEffect, on the other hand, runs synchronously immediately after the component has been rendered and before it has been painted to the screen. This means that it can block the browser from rendering and painting the component, and any updates to the DOM that it makes will be visible immediately.

import React, { useState, useEffect, useLayoutEffect } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times.</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// export default MyComponent;






function MyComponent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fullSizeImage, setFullSizeImage] = useState(null);

  useLayoutEffect(() => {
    if (selectedImage) {
      const img = new Image();
      img.onload = () => setFullSizeImage(img.src);
      img.src = selectedImage.src.replace('thumb', 'full');
    }
  }, [selectedImage]);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="thumbnail-container">
        <img
          src="https://via.placeholder.com/150x150.png?text=Image+1"
          alt="Image 1"
          onClick={() =>
            setSelectedImage({
              src: 'https://via.placeholder.com/600x600.png?text=Image+1+Full',
              alt: 'Image 1 Full',
            })
          }
        />
        <img
          src="https://via.placeholder.com/150x150.png?text=Image+2"
          alt="Image 2"
          onClick={() =>
            setSelectedImage({
              src: 'https://via.placeholder.com/600x600.png?text=Image+2+Full',
              alt: 'Image 2 Full',
            })
          }
        />
      </div>
      {fullSizeImage && (
        <div className="full-size-container">
          <img src={fullSizeImage} alt={selectedImage.alt} />
        </div>
      )}
    </div>
  );
}

export default MyComponent;
