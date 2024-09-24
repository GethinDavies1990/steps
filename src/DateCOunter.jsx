import React from "react";
import { useState } from "react";
import "./index.css";

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <>
      <div className='button-container'>
        <button onClick={() => setCount((currentCount) => currentCount - 1)}>
          -
        </button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((currentCount) => currentCount + 1)}>
          +
        </button>
      </div>
      <br></br>
      <div className='button-container'>
        <button>-</button>
        <p>Step: {step}</p>
        <button>+</button>
      </div>
    </>
  );
}

export default DateCounter;
