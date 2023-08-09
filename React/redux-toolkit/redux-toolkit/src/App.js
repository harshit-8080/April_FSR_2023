import ProductContainer from "./ProductContainer";
import { Provider } from "react-redux";
import appStore from "./redux/store";
import User from "./User";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <ProductContainer />
        <User />
      </div>
    </Provider>
  );
}

export default App;
