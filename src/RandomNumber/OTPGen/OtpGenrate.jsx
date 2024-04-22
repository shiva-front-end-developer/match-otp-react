import React, { useEffect, useRef, useState } from "react";
import "./Otp.css";

const OtpGenrate = () => {
  const emptyArr = ["", "", "", ""];
  const [inputs, setInputs] = useState(emptyArr);
  const [missing, setMissing] = useState(emptyArr);
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const CODE = "1234";

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleInputChange = (e, idx) => {
    const val = e.target.value;
    if (!Number(val)) {
      return;
    }

    if (idx < inputs.length - 1) {
      refs[idx + 1].current.focus();
    }
    const copyInput = [...inputs];
    copyInput[idx] = val;
    setInputs(copyInput);
  };
  // console.log(inputs);

  const handleOnKeyDown = (e, idx) => {
    // console.log(e.keyCode, idx);
    if (e.keyCode === 8) {
      const copyInput = [...inputs];
      copyInput[idx] = "";
      setInputs(copyInput);

      if (idx > 0) {
        refs[idx - 1].current.focus();
      }
    }
  };

  const handlePaseInput = (e) => {
    const data = e.clipboardData.getData("text");
    if (!Number(data) || data.length !== inputs.length) return;

    const pasteCode = data.split("");
    setInputs(pasteCode);
    refs[inputs.length - 1].current.focus();
  };

  const handleSubmit = () => {
    const missed = inputs
      .map((item, i) => {
        if (item === "") return i;
      })
      .filter((item) => item || item === 0);
    setMissing(missed);

    if (missed.length) {
      return;
    }

    const userInput = inputs.join("");
    const isMatch = userInput === CODE;
    const msg = isMatch ? "Code is Valid" : "Invalid Code";
    alert(msg);
  };

  return (
    <center>
      <h2>Two Factor code Input</h2>
      <div>
        {emptyArr.map((e, idx) => (
          <input
            value={inputs[idx]}
            key={idx}
            type="text"
            ref={refs[idx]}
            maxLength={1}
            onPaste={handlePaseInput}
            onChange={(e) => handleInputChange(e, idx)}
            onKeyDown={(e) => handleOnKeyDown(e, idx)}
            className={missing.includes(idx) ? "error" : ""}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </center>
  );
};

export default OtpGenrate;
