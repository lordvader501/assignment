import React from "react";
import { Container } from "../layouts/Container";
import Logo from "../../assets/logo.webp";
import "./Header.styles.scss";

function Header() {
  return (
    <div className="header">
      <Container className="pt-20 flexEnd w-full">
        <img src={`${Logo}`} alt="logo" className="logo-img" />
      </Container>
    </div>
  );
}

export default Header;
