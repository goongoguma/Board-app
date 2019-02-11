import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./boards/GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="big ui button">
        Go back to main board
      </Link>
      <GoogleAuth />
    </div>
  );
};

export default Header;
