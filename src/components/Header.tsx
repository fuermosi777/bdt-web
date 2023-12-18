import React from "react";
import "./Header.scss";

import { Literal } from "../constants/literals.ts";

const Header = () => {
  return (
    <div className="Header">
      {Literal.Title}
    </div>
  );
}

export default Header;
