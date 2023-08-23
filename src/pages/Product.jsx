import { Link, useLoaderData, useParams } from "react-router-dom";

export default function Product() {
  const product = useLoaderData();
  // if (!product) {
  //   return <h2>Oops... this product is not found</h2>;
  // }

  return (
    <section>
      <Link to="/products">
        <button>Back</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <button>Buy</button>
    </section>
  );
}
