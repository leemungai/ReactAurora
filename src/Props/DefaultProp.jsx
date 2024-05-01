function DefaultProp(props) {
  const {
    age,
    default_value = "Din;t Pass",
    AnotherCoolComponent,
    SayHelloComponent,
    SayHelloComponent2,
  } = props;
  return (
    <div>
      <h1>Default Prop</h1>
      <h1>The age is {age}</h1>
      <h2>{default_value}</h2>
      <AnotherCoolComponent />
      {SayHelloComponent}

      <SayHelloComponent2 name={"Default prop name"} />
    </div>
  );
}

export default DefaultProp;
