import { useState } from "react";

// Hook.
// React Functions

function AgeApp() {
  const [currentAge, setCurrentAge] = useState(5);

  function plusAge() {
    let newAge = currentAge + 1;
    setCurrentAge(newAge);
  }

  function generateAge() {
    if (currentAge < 18) {
      return "You are too young";
    }
    if (currentAge > 18 && currentAge < 30) {
      return "You can Drink and Marry";
    }
    return "You are an Ancestor";
  }

  return (
    <div>
      <div>
        <h1>This is an Age Checker</h1>
        <h1>
          Current Age <b id="current-age">{currentAge}</b>
        </h1>
        <h2>{generateAge()}</h2>
      </div>
      <div>
        <button id="age-" onClick={() => setCurrentAge(currentAge - 1)}>
          Age Minus
        </button>
        <button id="age+" onClick={plusAge}>
          Age Plus
        </button>
      </div>
    </div>
  );
}

export default AgeApp;
