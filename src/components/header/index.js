import React from "react";
import { Container } from "../container";
import * as S from "./styles";
import Logo from "../../assets/imgs/logo.svg";
import Group from "../../assets/imgs/Group.svg";
import Line from "../../assets/imgs/Line.svg";
import Dropdown from "../dropDownSolutions/index";
import DropDownLang from "../dropDownLang";

const Header = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.WrapperMenu>
          <S.Logo>
            <img src={Logo} alt="logo" />
          </S.Logo>
          <S.Options>
            <li>
              <Dropdown />
            </li>
            <li>Preços</li>
            <li>Academy</li>
            <li>Blog</li>
            <li>Contato</li>
            <li>
              <S.Img src={Line} alt="line" />
            </li>
          </S.Options>
          <S.Login>
            <S.WrapperOption1>
              <img src={Group} alt="group" /> Entrar
            </S.WrapperOption1>
            <div>
              <S.Button>Começar Agora</S.Button>
            </div>
            <S.WrapperOption2>
              <DropDownLang />
            </S.WrapperOption2>
          </S.Login>
          <S.MenuIcon />
        </S.WrapperMenu>
      </Container>
    </S.Wrapper>
  );
};

export default Header;
