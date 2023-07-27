import "./App.css";

import State from "./State";
import Product from "./Product";
import Card from "./Card";

function App() {
  let url =
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
  let title = "Watch";
  let desc = "Lorem ipsum dolor sit amet.";
  return (
    <div>
      <Card />

      {/* <State /> */}

      {/* <Product /> */}
      {/* <Product
        country="India"
        name="harshit"
        url={url}
        title={title}
        desc={desc}
      /> */}
    </div>
  );
}

export default App;
