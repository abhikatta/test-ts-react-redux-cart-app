import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/cart";
import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="w-auto h-full min-h-screen flex flex-col bg-slate-300">
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={ProductList} />
          <Route path="/product/:productId" Component={ProductDetail} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
