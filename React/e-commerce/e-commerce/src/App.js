import HomePage from "./Routes/HomePage";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./redux/store";
import Header from "./components/Header";
import CartPage from "./Routes/CartPage";
import Services from "./Routes/Services";
import Profile from "./Routes/Profile";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
