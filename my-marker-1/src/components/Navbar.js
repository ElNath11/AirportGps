import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="flex bg-gray-900">
        <li className="mr-6 text-blue-500 hover:text-blue-800">
          <Link to="/map">Map</Link>
        </li>
        <li className="mr-6 text-blue-500 hover:text-blue-800">
          <Link to="/chart">chart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
