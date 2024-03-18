import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo-container">
        <img
          className="header-logo"
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105827/881-768x591.png"
          alt=""
        />
      </div>

      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact US</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
