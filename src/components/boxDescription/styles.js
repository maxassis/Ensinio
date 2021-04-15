import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  width: 100%;
  // height: 41.3125rem;
  height: 34.375rem;
  padding-top: 6.6875rem;

  ${media.lessThan("medium")`
  padding-top: 3.625rem;
  `}
`;

export const WrapperDetails = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 4.3125rem;

  ${media.lessThan("medium")`
    margin-bottom:3rem;
  `}
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;

  h1:first-child {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 105%;
    letter-spacing: 0.15em;
    color: #432e98;
  }

  h1:nth-child(2) {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 150%;
    color: #423d51;
  }

  ${media.lessThan("large")`
  justify-content: center;
  `}

  ${media.lessThan("large")`
  h1:nth-child(2) {
    display: none;
  }
  `}
`;

export const Detail2 = styled.div`
  h1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 125%;
    letter-spacing: 0.005em;
    color: #130c25;
  }

  ${media.lessThan("small")`
  line-height: 113%;
  font-size: 1.5625rem;
  `}

  ${media.lessThan("large")`
    h1{
      font-size: 1.75rem;
      text-align: center;
    }
  `}
`;

export const WrapperCards = styled.div`
  display: flex;
  height: 14.6875rem;
  justify-content: space-around;
  gap: 9.5rem;
  border-bottom: 0.0625rem solid #e7e7e9;

  @media (max-width: 54.875rem) {
    height: 37.8125rem;
    flex-direction: column;
    align-items: center;
    gap: 0rem;
  }

  ${media.lessThan("large")`
  padding-bottom: 2.5rem; 
  `}
`;

export const Card = styled.div`
  width: 19rem;
  height: 14.6875rem;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 2.5rem;
  margin-bottom: 2.125rem;
`;

export const Title = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 125%;
  letter-spacing: 0.005em;
  color: #130c25;
  margin-bottom: 0.75rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;

  div:first-child {
    display: flex;
    align-items: center;
    gap: 2.375rem;
    cursor: pointer;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
  }

  @media (max-width: 54.875rem) {
    display: flex;
    flex-direction: column;
    gap: 2.1875rem;
    padding-bottom: 2.25rem;
  }
`;

export const Recursos = styled.div`
  display: none;

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 150%;
    color: #423d51;
    margin-bottom: 2.875rem;
  }

  ${media.lessThan("large")`
  display: flex;
  justify-content: center;
  `}
`;

export const Line = styled.img`
  margin-bottom: 0.3125rem;
  margin-right: 1rem;

  ${media.lessThan("medium")`
  display: none;
  `}
`;
