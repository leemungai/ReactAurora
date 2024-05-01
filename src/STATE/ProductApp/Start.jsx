function Stars(props) {
  const { rating } = props;

  if (rating === 1) {
    return <div>X0000</div>;
  }
  if (rating === 2) {
    return <div>XX000</div>;
  }
  if (rating === 3) {
    return <div>XXX00</div>;
  }
  if (rating === 4) {
    return <div>XXXX0</div>;
  }
  if (rating === 5) {
    return <div>XXXXX</div>;
  }

  return null;
}

export default Stars;
