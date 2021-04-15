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
  PT: () => css`
    visibility: visible;
  `,
  EN: () => css`
    visibility: visible;
  `,
  ES: () => css`
    visibility: visible;
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
    gap: 0.5rem;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 0.9375rem;
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
  width: 8.625rem;
  height: 9rem;
  background: #ffffff;

  display: flex;
  flex-direction: column;
`;

export const Flag = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 8.625rem;
  height: 3rem;
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
    font-size: 0.9375rem;
    line-height: 105%;
    color: #5a5566;
  }
`;

export const Icon = styled.img`
  margin-left: 1.6875rem;
  visibility: hidden;
`;

export const WrapperCountriesBr = styled.div`
  ${({ country }) => css`
    display: flex;
    gap: 0.625rem;

    ${Icon} {
      ${country === "PT" && wrapperModifiers.PT()}
    }
  `}
`;

export const WrapperCountriesUsa = styled.div`
  ${({ country }) => css`
    display: flex;
    gap: 0.625rem;

    ${Icon} {
      ${country === "EN" && wrapperModifiers.EN()}
    }
  `}
`;

export const WrapperCountriesSpa = styled.div`
  ${({ country }) => css`
    display: flex;
    gap: 0.625rem;

    ${Icon} {
      ${country === "ES" && wrapperModifiers.ES()}
    }
  `}
`;
