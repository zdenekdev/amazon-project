import Image from "next/image";
import { Products } from "../../types/index";
import Product from "./Product";

function ProductFeed({ products }: { products: Products[] }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products &&
        products
          .slice(0, 4)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}

      <div className="md:col-span-full">
        <Image
          src="https://links.papareact.com/dyz"
          alt="banner for small and medium businesses"
          height={300}
          width={1500}
          layout="intrinsic"
          objectFit="cover"
        />
      </div>

      <div className="md:col-span-2">
        {products &&
          products
            .slice(4, 5)
            .map(
              ({ id, title, price, description, category, image, rating }) => (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  rating={rating}
                />
              )
            )}
      </div>

      {products &&
        products
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}
    </div>
  );
}

export default ProductFeed;
