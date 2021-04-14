import React from "react";
import BoxDescription from "../../components/boxDescription";
import BoxImage from "../../components/boxImage";
//import DropDownLang from "../../components/dropDownLang/index";
import Header from "../../components/header";

const Home = () => {
  return (
    <>
      <BoxImage>
        <Header />
      </BoxImage>
      <BoxDescription />
    </>
  );
};

export default Home;
