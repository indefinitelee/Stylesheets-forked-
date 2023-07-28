import React from "react";
import { Link } from "react-router-dom";

const NavBar = () =>
  [
    { to: "/", loc: "Home" },
    { to: "/module", loc: "Module" },
    { to: "/head", loc: "Head" }
  ].map(({ loc, to }) => (
    <Link style={{ marginRight: 5 }} key={loc} to={to}>
      {loc}
    </Link>
  ));

export default NavBar;
