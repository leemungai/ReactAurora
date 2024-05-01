function GenerateAge(props) {
  const { currentAge } = props;

  if (currentAge < 18) {
    return <h1>"You are too young"</h1>;
  }

  if (currentAge > 18 && currentAge < 30) {
    return <h1>"You can Drink and Marry"</h1>;
  }

  return <h1>You are an Ancestor</h1>;
}
export default GenerateAge;
