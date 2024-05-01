function Other(props) {
  const { price } = props;

  return (
    <div>
      <div>
        Price <b>{price}</b>
      </div>
      <button>Add To Cart</button>
    </div>
  );
}

export default Other;
