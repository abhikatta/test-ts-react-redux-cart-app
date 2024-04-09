import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/cart";

const App = () => {
  return (
    <div className="w-auto h-auto flex flex-col justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" Component={ProductList} />
          <Route path="/product/:productId" Component={ProductDetail} />
          <Route path="/cart" Component={Cart}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
