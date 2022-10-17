import { useState } from "react";
import { usePrevious } from "../usepreviousHook/usePrevious";

const cities = ["Ahmedabad", "Surat", "Gandhinagar", "Delhi", "Mumbai"];

export const Dashboard = () => {
  const [selection, setSelections] = useState(cities[0]);
  const previousValue = usePrevious(selection) ?? '';

  return (
    <div>
      <h4>Select Values</h4>
      <div>
        <select onChange={(e) => setSelections(e.target.value)}>
          {cities.map((city, i) => (
            <option value={city} key={i}>{city}</option>
          ))}
        </select>
        <br />
        <div>
          <span>{`Previous : ${previousValue}`}</span>
          <br />
          <span>{`Current : ${selection}`}</span>
        </div>
      </div>
    </div>
  );
};
