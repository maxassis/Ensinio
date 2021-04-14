import React from "react";
import * as S from "./styles";
import Header from "../header/index";
import { Container } from "../container";
import Photo from "../../assets/imgs/photo.png";
import Play from "../../assets/imgs/Play.svg";

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
              Tenha sua própria escola online 100% white label com rede social,
              gamificação, clube de assinaturas, ecommerce e sistema EAD
              completo.
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
                Ver Vídeo
              </S.WatchVideo>
            </S.WrapperButtons>
          </S.WrapperTexts>
          <S.WrapperImage>
            <img src={Photo} alt="carinha" />
          </S.WrapperImage>
        </S.WrapperInformations>
      </Container>
    </S.Wrapper>
  );
};

export default BoxImage;
