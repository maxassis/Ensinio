import styled, { css } from "styled-components";

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
};

export const Wrapper = styled.div`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;
    ${Content} {
      transition: transform 0.2s ease-in, opacity 0.3s ease-in-out;
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`;

export const Title = styled.div`
  cursor: pointer;

  div {
    display: flex;
    gap: 8px;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 105%;
    color: #ffffff;
  }
`;

export const Content = styled.div`
  background: white;
  color: black;
  margin-top: 2.1875rem;
  position: absolute;
  right: 0;
`;

export const WrapperMenuFlags = styled.div`
  width: 138px;
  height: 144px;
  background: #ffffff;

  display: flex;
  flex-direction: column;
`;

export const Flag = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 138px;
  height: 48px;
  cursor: pointer;

  :hover {
    background: linear-gradient(
      90deg,
      #5f41d9 -880.48%,
      rgba(95, 65, 217, 0) 100%
    );
  }

  img {
    width: 1rem;
  }

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 105%;
    color: #5a5566;
  }
`;

export const WrapperCountriesBr = styled.div`
  display: flex;
  gap: 10px;
`;

export const WrapperCountriesUsa = styled.div`
  display: flex;
  gap: 10px;
`;

export const WrapperCountriesSpa = styled.div`
  display: flex;
  gap: 10px;
`;
