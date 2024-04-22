import React, { useState } from "react";

const App = () => {
  const [arr, setArr] = useState([
    "Playing Cricket",
    "Playing Video game",
    "Playing Hocky Games",
    "Playing Sport Game",
  ]);

  const [check, setCheck] = useState(false);
  const [select, setSelect] = useState(null);

  const handleChange = (idx) => {
    setCheck(!check);
    setSelect(idx);
  };

  const handleClick = (idx) => {
    setArr((prev) => prev.filter((e, idx) => idx !== select));
    setCheck(false);
  };

  return (
    <center>
      {arr.map((e, idx) => (
        <div key={idx}>
          <input
            type="checkbox"
            checked={check && select === idx}
            onChange={() => handleChange(idx)}
          />
          <li key={idx}>{e}</li>
          {check && select === idx && (
            <button onClick={() => handleClick(idx)}>Remove</button>
          )}
        </div>
      ))}
    </center>
  );
};

export default App;
