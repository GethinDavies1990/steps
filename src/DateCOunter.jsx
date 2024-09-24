import React from "react";
import { useState } from "react";
import "./index.css";

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className='button-container'>
        <button onClick={() => setStep((currentStep) => currentStep - 1)}>
          -
        </button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((currentStep) => currentStep + 1)}>
          +
        </button>
      </div>
      <div className='button-container'>
        <button onClick={() => setCount((currentCount) => currentCount - step)}>
          -
        </button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((currentCount) => currentCount + step)}>
          +
        </button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}

export default DateCounter;
