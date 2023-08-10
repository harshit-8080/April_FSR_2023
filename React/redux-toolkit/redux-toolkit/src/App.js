import ProductContainer from "./ProductContainer";
import { Provider } from "react-redux";
import appStore from "./redux/store";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <ProductContainer />
      </div>
    </Provider>
  );
}

export default App;
