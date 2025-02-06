import "./App.css";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

import React from "react";

function App() {
  const [products, setProducts] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/products").then(
        (response) => response.json()
      );

      setProducts(response);
    } catch (error) {
      console.error(`Fetch error: ${error}`);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <section className="products">
          <div className="products__header">
            <h2>Casual</h2>
            <p>
              Sort by: <b>Most popular</b>
            </p>
          </div>
          <div className="products__list">
            {products.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
