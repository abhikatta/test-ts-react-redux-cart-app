import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="w-auto h-[10rem] flex flex-row justify-around items-center ">
        <Link to={"/"}>
          <p>Fake Store App</p>
        </Link>
        <Link to={"/cart"}>
          <button>Cart</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
