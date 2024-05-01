function ShowCurrentAge(props) {
  const { currentAge } = props;

  return (
    <h1>
      Current Age <b>{currentAge}</b>
    </h1>
  );
}

export default ShowCurrentAge;
