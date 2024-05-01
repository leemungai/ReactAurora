function ClickEvent() {
  function buttonClicked(e) {
    let d = Date.now();

    console.log(e.target);
    console.log("Button was clicked on-> ", d);
  }

  function button2click() {
    console.log("Button was clicked 2");
  }

  function anotherBtn(e, age) {
    let d = Date.now();

    console.log(e.target);
    console.log("Button was clicked on-> ", d);
    console.log("The age is ", age);
  }

  function easy(e) {
    anotherBtn(e, 238);
  }

  return (
    <div>
      <h1>This is a click Event</h1>
      <button onClick={buttonClicked}>Click Me 1</button>
      <button
        onClick={(e) => {
          anotherBtn(e, 234);
        }}
      >
        Click Me 1
      </button>
      <button onClick={easy}>Click Me 3</button>
    </div>
  );
}

export default ClickEvent;
