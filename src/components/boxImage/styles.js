import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  // background: linear-gradient(259.95deg, #5f41d9 2.25%, #41b5d9 100.27%);
  background: linear-gradient(259.95deg, #41b5d9 2.25%, #5f41d9 100.27%);
  // transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const WrapperInformations = styled.div`
  height: 612px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 44px;
`;

export const WrapperImage = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Text1 = styled.h1`
  color: white;
  font-size: 16px;
`;

export const Text2 = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.03em;
  color: #ffffff;
`;

export const Text3 = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  opacity: 0.9;
`;

export const WrapperButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 4px;
`;

export const FirstButton = styled.button`
  width: 184px;
  height: 56px;
  left: 112px;
  top: 522px;
  background: #00e1e7;
  border-radius: 80px;
  border: none;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  color: #130c25;
  outline: none;
`;

export const WatchVideo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  color: #ffffff;
`;
