import { Products } from "../../types/index";
import Product from "./Product";

function ProductFeed({ products }: { products: Products[] }) {
  return (
    <div>
      <h1>products here...</h1>
      {products.map(
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
  );
}

export default ProductFeed;
