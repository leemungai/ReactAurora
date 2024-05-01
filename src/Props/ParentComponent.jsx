import DefaultProp from "./DefaultProp";

function ParentComponent() {
  let age = 23;
  let favMovie = "Song Bird";
  let arrof = ["A", "B", "C", "D", "E"];
  let obj = { name: "ffdsfsd", pop: 53453 };
  let bool = true;

  let user_name = "Mercy";

  function sayHello() {
    console.log("Hello World");
  }

  return (
    <div>
      <h1>I am the Parent</h1>
      <DefaultProp
        age={age}
        movie={favMovie}
        arrof={arrof}
        obj={obj}
        bool={bool}
        sayHello={sayHello}
        default_value={"From Parent"}
        AnotherCoolComponent={AnotherCoolComponent}
        SayHelloComponent={<SayHelloComponent name={user_name} />}
        SayHelloComponent2={SayHelloComponent}
      />
    </div>
  );
}

function AnotherCoolComponent() {
  return (
    <div>
      <h1>I am very cool</h1>
    </div>
  );
}

function SayHelloComponent(props) {
  const { name } = props;
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default ParentComponent;
