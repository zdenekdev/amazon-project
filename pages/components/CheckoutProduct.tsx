import Image from "next/image";
import { CheckoutProducts } from "../../types";
import { StarIcon } from "@heroicons/react/solid";
import primeLogo from "../../assets/prime-logo.png";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  ratingValue,
  description,
  category,
  image,
  hasPrime,
}: CheckoutProducts) {
  const dispatch = useDispatch();

  const currency = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      ratingValue,
      description,
      category,
      image,
      hasPrime,
    };

    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt="product image"
      />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(ratingValue)
            .fill(null)
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p>{currency(price)}</p>
        {hasPrime && (
          <div className="flex items-center spece-x-2">
            <Image
              loading="lazy"
              width={50}
              height={50}
              src={primeLogo}
              alt="prime logo"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
