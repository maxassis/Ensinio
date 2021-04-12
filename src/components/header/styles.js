import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 88px;
  background: rgba(0, 0, 0, 0.03);
`;

export const WrapperMenu = styled.div`
  display: grid;
  grid-template-columns: 400px 500px 400px;
  grid-template-rows: 88px;
`;

export const Logo = styled.div`
  display: flex;

  img {
    width: 121px;
  }
`;

export const Options = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;

  li {
    display: flex;
    gap: 12px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 105%;
    color: white;
    opacity: 0.9;
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  img {
    width: 15px;
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 40px;
  left: 1090px;
  top: 24px;
  opacity: 0.8.5;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 80px;
  cursor: pointer;
  background-color: transparent;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 105%;
  color: #ffffff;
`;

export const WrapperOption1 = styled.div`
  gap: 10.5px;
  display: flex;
`;

export const WrapperOption2 = styled.div`
  display: flex;
  gap: 8px;
`;
