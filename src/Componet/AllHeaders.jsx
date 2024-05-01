

function AllHeaders() {
  let h2Style = {
    backgroundColor: "aqua",
    color: "red",
  };

  return (
    <div>
      <h1
        style={{
          backgroundColor: "red",
          color: "white",
        }}
      >
        This is h1
      </h1>
      <h2 style={h2Style}>This is h2</h2>
      <h3 className="h1">This is h3</h3>
      <h4 className={`h1`}>This is h4</h4>
      <h5>This is h5</h5>
    </div>
  );
}

export default AllHeaders;
