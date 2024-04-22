import React, { useState } from "react";

const PollPs = () => {
  const [option, setOption] = useState([
    { title: "Option A", vote: 0 },
    { title: "Option B", vote: 3 },
    { title: "Option C", vote: 5 },
    { title: "Option D", vote: 12 },
    { title: "Option E", vote: 7 },
    { title: "Option F", vote: 2 },
  ]);

  const clickHandle = (idx) => {
    const updateOption = [...option];
    updateOption[idx].vote += 1;
    updateOption[idx].vote += 1;
    updateOption[idx].vote += 1;
    setOption(updateOption);
  };

  return (
    <div>
      <h2>choose your favorite option...</h2>
      <div>
        {option.map((e, idx) => (
          <button key={idx} onClick={() => clickHandle(idx)}>
            <span>{e.title}</span>
            <br />
            <span>{e.vote}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PollPs;

// import React, { useState } from "react";

// const PollPs = () => {
//   const [count, setCount] = useState(0);
//   const handleCLick = () => {
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//   };
//   return (
//     <div>
//       <button onClick={handleCLick}>Inc</button>
//       {count}
//     </div>
//   );
// };

// export default PollPs;
