import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    // Event listener to track the mouse location.
    const eventHandler = (e) => {
      const mousePosition = {
        x: e.clientX,
        y: e.clientY,
      };

      setCoordinates(mousePosition);
    };
    window.addEventListener('mousemove', eventHandler);

    return () => {
      window.removeEventListener('mousemove', eventHandler);
    };
  }, []);

  return coordinates;
};

export default useMousePosition;