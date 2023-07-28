import React, { useEffect, useState } from "react";

function News() {
  const [name, setName] = useState("Manohar");
  const [age, setAge] = useState(20);

  useEffect(
    function () {
      console.log("use Effect called");
    },
    [age]
  );

  console.log("rendering on Screen");
  return (
    <div>
      <h1>{name}</h1>
      <label htmlFor="">Name: </label>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <h1>{age}</h1>
      <label htmlFor="">Age: </label>
      <input
        type="text"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
    </div>
  );
}

export default News;
