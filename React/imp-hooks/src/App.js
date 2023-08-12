import Father from "./components/Father";
import Memo from "./components/Memo";
import Ref from "./components/Ref";
import User from "./components/User";
import C1 from "./components/C1";

import UserContext from "./context/UserContext";
import { useState } from "react";
import C2 from "./components/C2";
import C3 from "./components/C3";

function App() {
  const [name, setName] = useState("Abhi");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <User />
      <C1 />
      <C2 />
      <C3 />
    </UserContext.Provider>
  );
}

export default App;
