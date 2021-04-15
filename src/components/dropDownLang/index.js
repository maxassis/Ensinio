import React, { useState } from "react";
import * as S from "./styles.js";
import Brazil from "../../assets/imgs/brazil.svg";
import Usa from "../../assets/imgs/usa.svg";
import Spain from "../../assets/imgs/spain.svg";
import Path from "../../assets/imgs/path.svg";
import Polygon from "../../assets/imgs/Polygon.svg";

function DropDownLang({ color }) {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("PT");

  console.log(color);

  return (
    <>
      <S.Wrapper isOpen={isOpen}>
        <S.Title onClick={() => setIsOpen(!isOpen)} color={color}>
          <div>
            {country} <img src={Polygon} alt="poligon" />
          </div>
        </S.Title>

        <S.Content>
          <S.WrapperMenuFlags>
            <S.Flag>
              <S.WrapperCountriesBr
                onClick={() => setCountry("PT")}
                country={country}
              >
                <img src={Brazil} alt="brazil flag" />
                <h1>PT</h1>
                <S.Icon src={Path} alt="visto icon" />
              </S.WrapperCountriesBr>
            </S.Flag>
            <S.Flag>
              <S.WrapperCountriesUsa
                onClick={() => setCountry("EN")}
                country={country}
              >
                <img src={Usa} alt="Usa flag" />
                <h1>EN</h1>
                <S.Icon src={Path} alt="visto icon" />
              </S.WrapperCountriesUsa>
            </S.Flag>
            <S.Flag>
              <S.WrapperCountriesSpa
                onClick={() => setCountry("ES")}
                country={country}
              >
                <img src={Spain} alt="spain flag" />
                <h1>ES</h1>
                <S.Icon src={Path} alt="visto icon" />
              </S.WrapperCountriesSpa>
            </S.Flag>
          </S.WrapperMenuFlags>
        </S.Content>
      </S.Wrapper>
    </>
  );
}

export default DropDownLang;
