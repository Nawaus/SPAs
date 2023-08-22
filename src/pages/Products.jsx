import products from "../data/database.json";
export default function Products() {
  return (
    <section>
      <h2>All products</h2>
      <p>Take a look at our offers</p>
      <section className="products">
        <h2>CPUS</h2>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.name}</h4>
            <p>R$ {product.price}</p>
            <button>View</button>
            <button>Shopping</button>
          </li>
        ))}
      </section>
    </section>
  );
}
