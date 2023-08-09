import { useState } from "react";
import ProductContainer from "./ProductContainer";

function App() {
  const [data, setData] = useState({
    name: "Watch",
    price: 1000,
    company: "Titan",
  });

  function increasePrice() {
    setData({ ...data, price: data.price + 1000 });
  }
  return (
    <div className="App">
      <ProductContainer data={data} increasePrice={increasePrice} />
    </div>
  );
}

export default App;
