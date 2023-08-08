import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Checkout from "../components/Checkout";
import axios from "axios";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import Footer from "../components/Footer";

function BuyPage() {
  const [data, setData] = useState({});
  useEffect(() => {
    (async function f1() {
      const response = await axios.get(
        "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
      );
      setData(response.data);
    })();
  }, []);
  return (
    <div>
      <Header />
      <Checkout />
      <LineChart latestHits={data?.dasbhoardPage?.latestHits} />
      <PieChart storage={data?.dasbhoardPage?.storage} />
      <Footer />
    </div>
  );
}

export default BuyPage;
