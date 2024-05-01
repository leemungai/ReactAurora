function DoRate(props) {
  const { setD, d, i } = props;

  function plusRating() {
    let newProducts = [];

    for (let j = 0; j < d.length; j++) {
      let singleProduct = d[j];
      if (i === j) {
        singleProduct.rating = singleProduct.rating + 1;
      }

      newProducts.push(singleProduct);
    }

    //console.log(newProducts);
    setD(newProducts);
  }

  return (
    <div>
      <div>
        <h4>Update rating</h4>
        <div>
          <button onClick={plusRating}>Plus</button>
          <button>Minus</button>
        </div>
      </div>
      <div>
        <h4>Update Price</h4>
        <div>
          <button>Plus</button>
          <button>Minus</button>
        </div>
      </div>
    </div>
  );
}

export default DoRate;
