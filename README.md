# Documentation

## 📗 Index

- [useLocalStorage](#-uselocalstorage)
- [useDebounce](#-usedebounce)
- [useToggle](#-usetoggle)
- [useMousePosition](#-usemouseposition)
- [usePrevious](#-useprevious)

</br>

## 💾 useLocalStorage

Custom useState hook which saves the state value in localStorage

### Usage

```jsx
import React from "react";
import { useLocalStorage } from "use-custom-hooks";
const LocalValue = () => {
  const [username, setUserName] = useLocalStorage("john_doe", "username");
  /*
   If username exists in localStorage, the value of username state will be
   localStorage.getItem("username"). If username doesn't exist in localStorage, 
   the value of the state will be "john-doe" and a new item will be created in
   localStorage will key "username"
  */
  return <span>Value from localstorage is {username}</span>;
};
```

### Parameters

1. `initialValue` (_any_) : Initial value of the state.
2. `key` (_String_) : Key for the localStorage.

### Return value

`[state,setState]`

1. `state` (_any_) : The created state.
2. `setState` (_function_) : Function to change the state value.

</br>

## 🏀 useDebounce

Convert a normal function to a debounced function.

> Note: More about Debouncing : [here](https://www.geeksforgeeks.org/debouncing-in-javascript/)
### Usage

```jsx
import React from "react";
import { useDebounce } from "use-custom-hooks";
const LocalValue = () => {
  const fetchData = () => {
    //Fetch Data function
  };
  const debouncedFetchData = useDebounce(fetchData, 300);
  /*
   No matter how many times we call this function in 300ms, it will only
   execute once.
  */
  return <div>Lorem Ipsum</div>;
};
```

### Parameters

`[inputFunction,delay]`

1. `inputFunction` (_function_) : Function which is to be modified.
2. `delay` (_number_) : The time delay in milliseconds.

### Return value

`debouncedFunction` (_function_) : The modified function.


</br>

## 🔘 useToggle

Returns a boolean state and a state toggle function.

### Usage

```jsx
import React from "react";
import { useToggle } from "use-custom-hooks";
const Mood = () => {
  const [isHappy, toggleIsHappy] = useToggle(true);
  /*
    If isHappy state is true calling toggleIsHappy function will set 
    the isHappy state to false, and vise versa.
  */
  return (
    <div>
      <h1>Hello World</div>
      <p>{`The user is ${isHappy ? "Happy 😃" : "Sad 😢"}`}</p>
      <button onClick={toggleIsHappy}>Toggle</button>
    </div>
  );
};
```

### Parameters

1. `initialValue` (_boolean_) : Initial value of the state.

### Return value

`[state,toggleFunction]`

1. `state` (_boolean_) : The booelan state.
2. `toggleFunction` (_function_) : Function to toggle the state value.

</br>

## 🖱 useMousePosition

Returns an object with the current coordinates of the mouse pointer.

### Usage

```jsx
import React from "react";
import { useMousePointer } from "use-custom-hooks";
const Mouse = () => {
  const { x, y } = useMousePosition();
  /*
    Using Object destructuring to get x & y coordinates
    from mousePosition object.
  */
  return (
    <div>
      <h1>Mouse Pointer Location</div>
      <p>The mouse pointer is at : {`(${x},${y})`}</p>
      {/* The x,y coordinates will be updated as you move your mouse.*/}
    </div>
  );
};
```
### Parameters

None : This hooks takes no parameters.

### Return value

`{x,y}`

1. `x` (_number_) : X Coordinate of the mouse.
2. `y` (_number_) : Y Coordinate of the mouse.

</br>

## 🕒 usePrevious

Custom hook for retrieving the previous useState value

### Usage

```jsx
import React from "react";
import { usePrevious } from "use-custom-hooks";
function App() {
  // normal usage of useState
  const [visible, setVisible] = useState(false);
  
  // using the custom usePrevious hook to retrieve the value that was provided in the previous render
  const prevVisibility = usePrevious(visible);
  
  // Display both current and previous visibility states
  return (
    <div>
      <h1>Current visibility: {visible ? "visible":"not visible"}</h1>
      <h1>Previous visibility: {prevVisibility ? "visible":"not visible"}</h1>
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
    </div>
   );
}
```

### Parameters

`presentState` (_any_) : The current value (will be the previous value in the next render).

### Return value

`previousState` (_any_) : The previous state.

</br>
