import React, { useState } from "react";

const TooglePara = () => {
  const [isHide, setIsHide] = useState(false);
  const handleButtonClick = () => {
    setIsHide(!isHide);
  };
  return (
    <div>
      <p hidden={isHide}>This is paragaraph to hide and show </p>
      <br />
      <button onClick={handleButtonClick}>
        {isHide ? "Hide Button" : "Show Button"}
      </button>
    </div>
  );
};

export default TooglePara;
