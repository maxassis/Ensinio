import React from "react";
import * as S from "./styles";
import Header from "../header/index";
import { Container } from "../container";
import Photo from "../../assets/imgs/photo.png";
import Play from "../../assets/imgs/Play.svg";
import Union from "../../assets/imgs/Union.svg";
import Union2 from "../../assets/imgs/Union2.svg";

const BoxImage = () => {
  return (
    <S.Wrapper>
      <Header />

      <Container>
        <S.WrapperInformations>
          <S.WrapperTexts>
            <S.Text1>PLATAFORMA ALL IN ONE</S.Text1>
            <S.Text2>
              Sua escola online <br /> poderosa e lucrativa
            </S.Text2>
            <S.Text2Hide>Sua escola online poderosa e lucrativa</S.Text2Hide>
            <S.Text3>
              Tenha sua própria escola online 100% white label com <br /> rede
              social, gamificação, clube de assinaturas, <br /> ecommerce e
              sistema EAD completo.
            </S.Text3>
            <S.Text3Hide>
              Tenha sua própria escola online 100% white label com rede social,
              gamificação, clube de assinaturas, ecommerce e sistema EAD
              completo.
            </S.Text3Hide>
            <S.WrapperButtons>
              <S.FirstButton>Começar agora</S.FirstButton>
              <S.WatchVideo href="#">
                <img src={Play} alt="play" />
                <span> Ver Vídeo </span>
              </S.WatchVideo>
            </S.WrapperButtons>
          </S.WrapperTexts>
          <S.WrapperImage>
            <S.Union src={Union} alt="union" />;
            <S.Union2 src={Union2} alt="union" />
            <img src={Photo} alt="carinha" />
          </S.WrapperImage>
        </S.WrapperInformations>
      </Container>
    </S.Wrapper>
  );
};

export default BoxImage;
