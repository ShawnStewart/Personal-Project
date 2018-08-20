import React from "react";
import { Button, Modal } from "semantic-ui-react";

import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav__container">
        <a href="/">
          <h1 className="Nav__link">Game</h1>
        </a>
        <div>
          <Button size="small" color="linkedin" content="Sign In" />
          <Button size="small" color="linkedin" content="Register" />
        </div>
      </div>
    </nav>
  );
};
