function InputEvent() {
  const inputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input onChange={inputChange} />
      <button
        onMouseOver={() => {
          console.log("Mouse Over this");
        }}
      >
        Hover over me
      </button>
    </div>
  );
}

export default InputEvent;
