import { Link } from "react-router-dom";
import products from "../data/database.json";

export default function Products() {
  return (
    <section>
      <h2>All products</h2>
      <p>Check out our offers.</p>
      <section className="products">
        <h3>CPUs</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h4>{product.name}</h4>
              <p>R$ {product.price}</p>
              <Link to={`/products/${product.id}`}>
                <button>Ver</button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
