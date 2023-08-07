import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import LatestPage from "./pages/LatestPage";
import BuyPage from "./pages/BuyPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/latest" element={<LatestPage />} />
        <Route path="/buy" element={<BuyPage />} />
      </Routes>
    </div>
  );
}

export default App;
