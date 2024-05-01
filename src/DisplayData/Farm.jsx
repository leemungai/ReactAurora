let ageCat = 12;

let cows = ["COCO", "LOLO", "MOMO"];

let myname = "John Mbugu";

function sayHello() {
  return "Hello World";
}

function doAlert() {
  alert("Hello World");
}

function Farm() {
  let m = 34;

  let x = m < 10; // statement or an expression
  if (m < 10) {
    m = "Less than 10";
  }

  let y = m < 10 ? "HEllo World" : "Its Soo Big";

  console.log("Y is", y);

  let obj = { name: "name", age: 23 };

  return (
    <div>
      <h1>
        The age of my cat is {ageCat} is{" "}
        {ageCat > 20 ? "Old Cat" : "Very Young Cat"}
      </h1>
      <h1>I have the following cows {cows.join(",")}</h1>
      <h2>My name {myname}</h2>
      <h3>Say something {sayHello()}</h3>
      <h4>{m < 10 ? "HEllo World" : "Its Soo Big"}</h4>
      <h3>{m > 10}</h3>
      <h3>{true}</h3>
      <h1>{obj.name}</h1>
      <h1>{obj["name"]}</h1>
    </div>
  );
}

export default Farm;
