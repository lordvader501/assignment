import React from "react";
import { Container } from "./layouts/Container";
import "./HomeSection.styles.scss";
import SearchBox from "./SearchBox/SearchBox";

const HomeLayout:React.FC = () => {
  return (
    <div className="w-full flexCenter">
      <Container className="w-full flexCenter">
        <SearchBox />
      </Container>
    </div>
  );
}

export default HomeLayout;
