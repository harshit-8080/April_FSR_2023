import React from "react";

const MovieCard = (props) => {
  return (
    <div style={{ border: "2px solid black", margin: "10px", padding: "20px" }}>
      <img src={props.sunil.Poster} alt="" />
      <h1>{props.sunil.Title}</h1>
      <p>{props.sunil.Year}</p>
      <p>{props.sunil.Type}</p>
    </div>
  );
};

export default MovieCard;
