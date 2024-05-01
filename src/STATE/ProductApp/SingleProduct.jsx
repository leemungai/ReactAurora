import Image from "./Image";

import Info from "./Info";
import Stars from "./Start";
import Other from "./Other";

import DoRate from "./DoRate";

function SingleProduct(props) {
  const { src, name, rating, price, setD, d, i } = props;
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Image src={src} />
      </div>
      <div>
        <Info name={name} />
        <Stars rating={rating} />
        <Other price={price} />
        <DoRate setD={setD} d={d} i={i} />
      </div>
    </div>
  );
}

export default SingleProduct;
