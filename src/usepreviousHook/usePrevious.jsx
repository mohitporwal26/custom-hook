import { useRef } from "react";

export const usePrevious = (value) => {
  const currentRef = useRef(value);
  const prevRef = useRef();

  if (currentRef.current !== value) {
    prevRef.current = currentRef.current;
    currentRef.current = value;
  }
  return prevRef.current;
};
