import Image from "next/image";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { Products } from "../../types";
import primeLogo from "../../assets/prime-logo.png";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Products) {
  const [ratingValue] = useState(Math.round(rating.rate));
  const [hasPrime, setHasPrime] = useState(false);

  useEffect(() => {
    setHasPrime(Math.random() < 0.5);
  }, []);

  const currency = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        alt="product image"
        src={image}
        width={200}
        height={200}
        objectFit="contain"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(ratingValue)
          .fill(null)
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">{currency(price)}</div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image width={50} height={50} src={primeLogo} alt="prime logo" />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
