function ButtonSection(props) {
  const { plusAge, currentAge, setCurrentAge } = props;

  console.log("Button Section Render");

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

export default ButtonSection;
