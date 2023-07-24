import "./App.css";
import User from "./User";

function App() {
  let yourName = "Sandeep";
  let yourCountry = "india";
  let yourAge = "20";

  let s1 = {
    color: "red",
    fontSize: "26",
    fontWeight: "bold",
    border: "1px solid red",
    backgroundColor: "yellow",
  };

  return (
    <div>
      {/* <User name={yourName} country={yourCountry} age={yourAge} /> */}

      <p style={s1}>Lorem ipsum dolor sit amet.</p>

      <h1 style={{ color: "blue", border: "2px dashed black" }}>React</h1>
    </div>
  );
}

export default App;

/*

 questions 1: How to pass Props ??


*/
