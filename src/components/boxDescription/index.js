import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Container } from "../container/index";
import Playlist from "../../assets/imgs/playlists.svg";
import Rocket from "../../assets/imgs/rocket.svg";
import Arrow from "../../assets/imgs/arrow.svg";
import api from "../../services/api";

function BoxDescription() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("items")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  console.log(data);

  return (
    <S.Wrapper>
      <Container>
        <S.WrapperDetails>
          <S.Detail>
            <h1>PENSAMOS EM CADA DETALHE</h1>
            <h1>Conheça alguns dos nossos recursos ⚡️</h1>
          </S.Detail>
          <S.Detail2>
            <h1>Queremos que o aluno se sinta confortável enquanto aprende</h1>
          </S.Detail2>
        </S.WrapperDetails>
        <S.WrapperCards>
          <S.Card>
            <S.Img src={Playlist} alt="playlist" />
            <S.Title>Trilhas de etapas</S.Title>
            <p>
              Crie planos de estudos especificando aulas e/ou cursos e definindo
              a ordem que seus alunos devem estudar.
            </p>
          </S.Card>
          <S.Card>
            <S.Img src={Playlist} alt="playlist" />
            <S.Title>Trilhas de etapas</S.Title>
            <p>
              Crie planos de estudos especificando aulas e/ou cursos e definindo
              a ordem que seus alunos devem estudar.
            </p>
          </S.Card>
          <S.Card>
            <S.Img src={Playlist} alt="playlist" />
            <S.Title>Trilhas de etapas</S.Title>
            <p>
              Crie planos de estudos especificando aulas e/ou cursos e definindo
              a ordem que seus alunos devem estudar.
            </p>
          </S.Card>
        </S.WrapperCards>
        <S.Footer>
          <div>
            <img src={Rocket} alt="rocket" /> Veja todos os outros recursos
            disponíveis para te ajudar
          </div>
          <div>
            <h1>Ver mais</h1>
            <img src={Arrow} alt="arrow" />
          </div>
        </S.Footer>
      </Container>
    </S.Wrapper>
  );
}

export default BoxDescription;
