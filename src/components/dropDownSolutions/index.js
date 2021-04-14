import React, { useState } from "react";
import * as S from "./styles";
import School from "../../assets/imgs/school.svg";
import Social from "../../assets/imgs/social.svg";
import Game from "../../assets/imgs/game.svg";
import Mobile from "../../assets/imgs/mobile.svg";
import Polygon from "../../assets/imgs/Polygon.svg";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Wrapper isOpen={isOpen}>
        <S.Title onClick={() => setIsOpen(!isOpen)}>
          <S.Li>
            Soluções <img src={Polygon} alt="menu" />
          </S.Li>
        </S.Title>

        <S.Content>
          <S.WrapperContent>
            <S.WrapperSolutions>
              <S.Solutions>SOLUÇÕES PRINCIPAIS</S.Solutions>
            </S.WrapperSolutions>
            <S.WrapperDescriptions>
              <S.Icon src={School} alt="school icon" />
              <S.WrapperData>
                <S.Descriptions>Crie uma Escola Online</S.Descriptions>
                <S.SubTitle>Lorem ipsum dolor sit amet</S.SubTitle>
              </S.WrapperData>
            </S.WrapperDescriptions>
            <S.WrapperDescriptions>
              <S.Icon src={Social} alt="social icon" />
              <S.WrapperData>
                <S.Descriptions>Comunidade e rede social</S.Descriptions>
                <S.SubTitle>Lorem ipsum dolor sit amet</S.SubTitle>
              </S.WrapperData>
            </S.WrapperDescriptions>
            <S.WrapperDescriptions>
              <S.Icon src={Game} alt="game icon" />
              <S.WrapperData>
                <S.Descriptions>Gamificação</S.Descriptions>
                <S.SubTitle>Lorem ipsum dolor sit amet</S.SubTitle>
              </S.WrapperData>
            </S.WrapperDescriptions>
            <S.WrapperDescriptions>
              <S.Icon src={Mobile} alt="mobile icon" />
              <S.WrapperData>
                <S.Descriptions>Aplicativo mobile</S.Descriptions>
                <S.SubTitle>Lorem ipsum dolor sit amet</S.SubTitle>
              </S.WrapperData>
            </S.WrapperDescriptions>
          </S.WrapperContent>
        </S.Content>
      </S.Wrapper>
    </>
  );
}

export default Dropdown;
