import React, { useState, useEffect } from "react";

const SimplePS = () => {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [int, setInt] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateSimple = (principle * rate * time) / 100;
    setInt(calculateSimple.toFixed(2));

    setTotal((principle + calculateSimple).toFixed(2));
  }, [principle, rate, time]);

  return (
    <div>
      <label>Principle Amount ($) </label>
      <br />
      <input
        type="number"
        value={principle}
        onChange={(e) => setPrinciple(parseFloat(e.target.value))}
      />
      <br />
      <label>Rate (%) </label>
      <br />
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(parseFloat(e.target.value))}
      />
      <br />
      <label>Time (Month) </label>
      <br />
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(parseFloat(e.target.value))}
      />
      <br />
      <div>
        <span>Interest: ($) {int}</span>
        <br />
        <span>Total Amount: ($) {total}</span>
      </div>
    </div>
  );
};

export default SimplePS;
