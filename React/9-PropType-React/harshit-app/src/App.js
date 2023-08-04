import Demo from "./Demo";
import Movie from "./Movie";
import User from "./User";

function App() {
  return (
    <div className="App">
      <User
        id="x1"
        name="Abhi"
        gender="male"
        salary={1000}
        country="India"
        info={[10, 20, 30]}
      />
      <User
        id={71}
        name="Moni"
        gender="female"
        salary={2000}
        country="US"
        info={[10, 20, 30]}
      />
      <User
        id="x3"
        name="xyzzzz"
        gender="other"
        salary={2000}
        country="US"
        info={[10, 20, 30]}
      />

      <Movie element="harshit" />
    </div>
  );
}

export default App;
