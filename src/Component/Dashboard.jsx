import { useState } from "react";
import useLocalStorage from "../useLocalStorageHook/useLocalStorage";
import { usePrevious } from "../usepreviousHook/usePrevious";

const cities = ["Ahmedabad", "Surat", "Gandhinagar", "Delhi", "Mumbai"];

export const Dashboard = () => {
  const [selection, setSelections] = useState(cities[0]);
  const previousValue = usePrevious(selection) ?? "";
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div style={{ background: theme === "light" ? "white" : "grey" }}>
      <h4>Select Values</h4>
      <div style={{ margin: "20px" }}>
        <select onChange={(e) => setSelections(e.target.value)}>
          {cities.map((city, i) => (
            <option value={city} key={i}>
              {city}
            </option>
          ))}
        </select>
        <br />
        <div>
          <span>{`Previous : ${previousValue}`}</span>
          <br />
          <span>{`Current : ${selection}`}</span>
        </div>
      </div>
      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        Toggle theme {theme}
      </button>
    </div>
  );
};
