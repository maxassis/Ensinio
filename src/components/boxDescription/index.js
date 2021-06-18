import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Container } from '../container/index'
import Playlist from '../../assets/imgs/playlists.png'
import Rocket from '../../assets/imgs/rocket.svg'
import Arrow from '../../assets/imgs/arrow.svg'
import Folder from '../../assets/imgs/folder.png'
import Trilhas from '../../assets/imgs/trilhas.png'
import LineHorizontal from '../../assets/imgs/lineHorizontal.svg'
import api from '../../services/api'

function BoxDescription() {
  const [data, setData] = useState([])

  useEffect(() => {
    api
      .get('items')
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  console.log(data)

  return (
    <S.Wrapper>
      <Container>
        <S.WrapperDetails>
          <S.Detail>
            <h1>
              <S.Line src={LineHorizontal} alt="line" /> PENSAMOS EM CADA
              DETALHE
            </h1>
            <h1>Conheça alguns dos nossos recursos ⚡️</h1>
          </S.Detail>
          <S.Detail2>
            <h1>Queremos que o aluno se sinta confortável enquanto aprende</h1>
          </S.Detail2>
        </S.WrapperDetails>
        <S.Recursos>
          <h1>Conheça alguns dos nossos recursos ⚡️</h1>
        </S.Recursos>
        <S.WrapperCards>
          {data.map(function (dt) {
            return (
              <S.Card key={dt.id}>
                {dt.id === 1 && <S.Img src={Trilhas} alt="trilhas" />}
                {dt.id === 2 && <S.Img src={Playlist} alt="playlist" />}
                {dt.id === 3 && <S.Img src={Folder} alt="folder" />}

                <S.Title>{dt.title}</S.Title>
                <p>{dt.description}</p>
              </S.Card>
            )
          })}
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
  )
}

export default BoxDescription
