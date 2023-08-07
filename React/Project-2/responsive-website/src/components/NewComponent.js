import React, { useEffect, useState } from "react";
import NewCard from "./NewCard";
import "../styles/NewComponent.css";

let input = {
  width: "250px",
  padding: "10px",
  borderRadius: "5px",
  outline: "none",
  marginTop: "20px",
  marginBottom: "20px",
  marginLeft: "calc((75vw)/2)",
};

function NewComponent() {
  const [newData, setNewData] = useState([]);
  const [search, setSearch] = useState("crypto");

  console.log(search);
  useEffect(() => {
    (async function f1() {
      let url = `https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=0149e22557a65d88196baed76d47d6ab`;
      const response = await fetch(url);
      const data = await response.json();
      setNewData(data["articles"]);
    })();
  }, [search]);

  return (
    <>
      <div className="new-component">
        {newData?.map((item) => {
          return <NewCard data={item} />;
        })}
      </div>
    </>
  );
}

export default NewComponent;
