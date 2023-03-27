import React from "react";
import NavbarStyles from "./navbar.module.css";
import Option from "./Options/Option";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className={NavbarStyles.navbar}>
      <nav className={NavbarStyles.navbarContent}>
        <Option />
      </nav>
    </header>
  );
};

export default Navbar;
