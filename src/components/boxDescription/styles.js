import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  width: 100%;
  height: 661px;
  padding-top: 107px;

  ${media.lessThan("medium")`
  padding-top: 58px;
  `}
`;

export const WrapperDetails = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 69px;

  ${media.lessThan("medium")`
    margin-bottom:48px;
  `}
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;

  h1:first-child {
    font-family: Degular;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 105%;
    letter-spacing: 0.15em;
    color: #432e98;
  }

  h1:nth-child(2) {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
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
    font-family: Degular;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 125%;
    letter-spacing: 0.005em;
    color: #130c25;
  }

  ${media.lessThan("large")`
    h1{
      font-size: 28px;
      text-align: center;
    }
  `}
`;

export const WrapperCards = styled.div`
  display: flex;
  height: 235px;
  justify-content: space-around;
  gap: 152px;
  border-bottom: 1px solid #e7e7e9;

  @media (max-width: 878px) {
    height: 605px;
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }

  ${media.lessThan("large")`
  padding-bottom: 40px; 
  `}
`;

export const Card = styled.div`
  width: 304px;
  height: 235px;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 40px;
  margin-bottom: 34px;
`;

export const Title = styled.h1`
  font-family: Degular;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: 0.005em;
  color: #130c25;
  margin-bottom: 12px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  div:first-child {
    display: flex;
    align-items: center;
    gap: 38px;
    cursor: pointer;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 32px;
    cursor: pointer;
  }

  @media (max-width: 878px) {
    display: flex;
    flex-direction: column;
    gap: 35px;
    padding-bottom: 36px;
  }
`;

export const Recursos = styled.div`
  display: none;

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #423d51;
    margin-bottom: 46px;
  }

  ${media.lessThan("large")`
  display: flex;
  justify-content: center;
  `}
`;
