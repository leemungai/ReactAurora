import { useState } from "react";
import SingleProduct from "./SingleProduct";

const data = [
  {
    name: "Samsung Galaxy A15 ",
    rating: 4,
    cost: 345,
    img: "https://m.media-amazon.com/images/I/51rK-Be8dxL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    name: "TracFone Motorola Moto g Play, 32GB, Black - Prepaid Smartphone (Locked)",
    rating: 2,
    cost: 423,
    img: "https://m.media-amazon.com/images/I/616iCrrlrUL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Test Phone Cool",
    rating: 4,
    cost: 423,
    img: "https://m.media-amazon.com/images/I/81k6vcykYYL._AC_UY327_FMwebp_QL65_.jpg",
  },
];

function ProductApp() {
  const [d, setD] = useState(data);

  return (
    <div>
      {d.map((item, i) => {
        // console.log(item);
        return (
          <SingleProduct
            key={i} // REact
            src={item.img}
            name={item.name}
            rating={item.rating}
            price={item.cost}
            setD={setD}
            d={d}
            i={i}
          />
        );
      })}
    </div>
  );
}

export default ProductApp;
