import React, { useState } from "react";
import { Container } from "../container";
import * as S from "./styles";
import Logo from "../../assets/imgs/logo.svg";
import Group from "../../assets/imgs/Group.svg";
import Line from "../../assets/imgs/Line.svg";
import Dropdown from "../dropDownSolutions/index";
import DropDownLang from "../dropDownLang";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";
import Polygon from "../../assets/imgs/Polygon.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <S.MenuIcon onClick={() => setIsOpen(!isOpen)} />
        </S.WrapperMenu>
      </Container>
      <S.MenuFull isOpen={isOpen}>
        <S.WrapperIcon>
          <span>
            PT <img src={Polygon} alt="poligon icon" />
          </span>
          <CloseIcon onClick={() => setIsOpen(!isOpen)} size="35" />
        </S.WrapperIcon>
        <S.ContainerMenus>
          <S.Span>Soluções</S.Span>
          <S.Span>Preços</S.Span>
          <S.Span>Academy</S.Span>
          <S.Span>Blog</S.Span>
          <S.Span>Contato</S.Span>
          <S.Span>Entrar</S.Span>
        </S.ContainerMenus>
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Header;
