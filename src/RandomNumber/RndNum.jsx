import React, { useState } from "react";

const RndNum = () => {
  const [startNum, setStartNum] = useState("");
  const [endNum, seEndNum] = useState("");
  const [random, setRandom] = useState("");

  const handleClick = () => {
    if (!startNum || !endNum || isNaN(!startNum) || isNaN(!endNum)) {
      setRandom("please enter a valid Number");
      return;
    }
    const start = parseInt(startNum, 10);
    const end = parseInt(endNum, 10);
    if (start >= end) {
      setRandom("Number is equal or less than end Number");
      return;
    }
    const genRandom = Math.floor(Math.random() * (end - start) + 1) + start;
    setRandom(`Random number is ${genRandom}`);
  };
  return (
    <div>
      <h1>Random Number Genrator</h1>
      <div>
        <label>Starting Number </label>
        <br />
        <input
          type="number"
          value={startNum}
          onChange={(e) => setStartNum(e.target.value)}
        />
      </div>
      <div>
        <label>Ending Number</label>
        <br />
        <input
          type="number"
          value={endNum}
          onChange={(e) => seEndNum(e.target.value)}
        />
      </div>
      <div>
        <br />
        <button onClick={handleClick}>GenrateRandomNumber</button>
      </div>
      <br />
      <div>
        <span>{random}</span>
      </div>
    </div>
  );
};

export default RndNum;
