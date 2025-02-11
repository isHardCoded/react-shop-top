import "./App.css";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

import React from "react";

function App() {
  const chooseItems = ["Price Up", "Price Down", "Most Popular"];

  const [products, setProducts] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [choose, setChoose] = React.useState("Most Popular");

  const handleChooseItem = (element) => {
    setChoose(element);
  };

  const handleOpenMenu = () => {
    setOpen((open) => !open);
  };

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
            <div className="choose__sort">
              <p onClick={() => handleOpenMenu()}>Sort by: {choose}</p>
              {open && (
                <ul className="choose__list">
                  {chooseItems.map((element) => (
                    <li
                      className={choose == element ? "active" : ""}
                      onClick={() => handleChooseItem(element)}
                    >
                      {element}
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
