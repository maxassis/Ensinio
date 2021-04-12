import React from "react";
import { Container } from "../container";
import * as S from "./styles";
import Logo from "../../assets/imgs/logo.svg";
import Polygon from "../../assets/imgs/Polygon.svg";
import Group from "../../assets/imgs/Group.svg";

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
              Soluções <img src={Polygon} alt="menu" />
            </li>
            <li>Preços</li>
            <li>Academy</li>
            <li>Blog</li>
            <li>Contato</li>
          </S.Options>
          <S.Login>
            <S.WrapperOption1>
              <img src={Group} alt="group" /> Entrar
            </S.WrapperOption1>
            <div>
              <S.Button>Começar Agora</S.Button>
            </div>
            <S.WrapperOption2>
              PT <img src={Polygon} alt="poligon" />
            </S.WrapperOption2>
          </S.Login>
        </S.WrapperMenu>
      </Container>
    </S.Wrapper>
  );
};

export default Header;
