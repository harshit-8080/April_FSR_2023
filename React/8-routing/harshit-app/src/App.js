import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Sachin from "./Sachin";
import Dhoni from "./Dhoni";
import Virat from "./Virat";
import Rohit from "./Rohit";
import NotFound from "./NotFound";
import Car from "./Car";
import CarColor from "./CarColor";
import CarModel from "./CarModel";
import CarPrice from "./CarPrice";
import User from "./User";

function App() {
  return (
    <>
      <Routes>
        {/* using params */}
        <Route path="/user/:userId/:userName/:userCountry" element={<User />} />


        <Route path="/" element={<Header />} />
        {/* http://localhost:3000/ */}

        <Route path="/sachin" element={<Sachin />} />
        {/* http://localhost:3000/sachin */}

        <Route path="/dhoni" element={<Dhoni />} />
        {/* http://localhost:3000/dhoni */}

        <Route path="/virat" element={<Virat />} />
        {/* http://localhost:3000/virat */}

        <Route path="/rohit" element={<Rohit />} />
        {/* http://localhost:3000/rohit */}

        {/* Nested ROutes */}
        <Route path="/car" element={<Car />}>
          <Route path="color" element={<CarColor />} />
          {/* http://localhost:3000/car/color */}
          <Route path="model" element={<CarModel />} />
          {/* http://localhost:3000/car/model */}
          <Route path="price" element={<CarPrice />} />
          {/* http://localhost:3000/car/price */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
