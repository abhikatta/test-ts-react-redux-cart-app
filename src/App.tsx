import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <div className="w-auto h-screen flex flex-col">
      <Router>
        <Routes>
          <Route path="/" Component={ProductList} />
          <Route path="/product/:productId" Component={ProductDetail} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
