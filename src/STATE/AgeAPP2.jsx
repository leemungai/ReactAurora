import { useState } from "react";

function AgeAPP2() {
  const [currentAge, setCurrentAge] = useState(5);

  function plusAge() {
    let newAge = currentAge + 1;
    setCurrentAge(newAge);
  }

  return (
    <div>
      <div>
        <h1>This is an Age Checker 2</h1>
        <ShowCurrentAge currentAge={currentAge} />
        <GenerateAge currentAge={currentAge} />
      </div>
      <BtnSection
        currentAge={currentAge}
        setCurrentAge={setCurrentAge}
        plusAge={plusAge}
      />
    </div>
  );
}

function ShowCurrentAge(props) {
  const { currentAge } = props;
  return (
    <h1>
      Current Age <b id="current-age">{currentAge}</b>
    </h1>
  );
}

function GenerateAge(props) {
  const { currentAge } = props;
  function generateAge() {
    if (currentAge < 18) {
      return "You are too young";
    }
    if (currentAge > 18 && currentAge < 30) {
      return "You can Drink and Marry";
    }
    return "You are an Ancestor";
  }

  return <h2>{generateAge()}</h2>;
}

function BtnSection(props) {
  const { plusAge, setCurrentAge, currentAge } = props;
  return (
    <div>
      <button id="age-" onClick={() => setCurrentAge(currentAge - 1)}>
        Age Minus
      </button>
      <button id="age+" onClick={plusAge}>
        Age Plus
      </button>
    </div>
  );
}

export default AgeAPP2;
