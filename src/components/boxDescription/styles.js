import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 661px;
  padding-top: 107px;
`;

export const WrapperDetails = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 69px;
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
`;

export const WrapperCards = styled.div`
  display: flex;
  height: 235px;
  justify-content: space-around;
  gap: 152px;

  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  // grid-template-rows: 235px;
  border-bottom: 1px solid #e7e7e9;
`;

export const Card = styled.div`
  // width: 405px;
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
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;
