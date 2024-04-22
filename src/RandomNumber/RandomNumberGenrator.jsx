// import React, { useState } from "react";

// const RandomNumberGenrator = () => {
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [error, setError] = useState("");
//   const [randomNumber, setRandomNumber] = useState("");

//   const genRandomNumber = () => {
//     const startNumebr = Number(start);
//     const endNumebr = Number(end);
//     if (isNaN(startNumebr) || isNaN(endNumebr)) {
//       setError("please enter a valid number for both start and end numbers");
//     } else if (startNumebr >= endNumebr) {
//       setError("Start number sould be greater or equal than end number");
//     } else {
//       const genrateNumber =
//         Math.floor(Math.random() * (endNumebr - startNumebr + 1)) + startNumebr;
//       setRandomNumber(`genrate random number: ${genrateNumber}`);
//       setError("");
//     }
//   };
//   return (
//     <div>
//       <label>Starting Number</label>
//       <input
//         type="text"
//         value={start}
//         onChange={(e) => setStart(e.target.value)}
//       />
//       <br />
//       <label>Ending Number</label>
//       <input type="text" value={end} onChange={(e) => setEnd(e.target.value)} />
//       <br />
//       <button onClick={genRandomNumber}>Click to Random</button>
//       <br />
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {randomNumber && (
//         <p style={{ color: "green", fontSize: "45px" }}>{randomNumber}</p>
//       )}
//     </div>
//   );
// };

// export default RandomNumberGenrator;

import React, { useState } from "react";

const RandomNumberGenrator = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [random, setRandom] = useState("");

  const handleClick = () => {
    if (!start || !end || isNaN(start) || isNaN(end)) {
      setRandom("invalid Number");
      return;
    }
    const startNum = parseInt(start, 10);
    const endNum = parseInt(end, 10);
    if (startNum >= endNum) {
      setRandom("invalid Number");
      return;
    }

    const genRandom =
      Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
    setRandom(`Generate Random Number: ${genRandom}`);
  };

  return (
    <div>
      <label>Starting Number</label>
      <input
        type="number"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />

      <br />
      <label>Ending Number</label>
      <input
        type="number"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Click to Genrate Number</button>
      <br />
      {random}
      <br />
    </div>
  );
};

export default RandomNumberGenrator;
