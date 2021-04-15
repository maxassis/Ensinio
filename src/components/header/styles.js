import styled from "styled-components";
import media from "styled-media-query";
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight";

export const Wrapper = styled.div`
  width: 100%;
  height: 88px;
  background: rgba(0, 0, 0, 0.03);
`;

export const WrapperMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 88px;

  ${media.lessThan("large")`
    display: flex;
    height: 88px;
    justify-content: space-between;
    
  `}
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

  @media (max-width: 1229px) {
    gap: 20px;
  }

  ${media.lessThan("large")`
    display: none;
    
  `}
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  img {
    width: 15px;
  }

  @media (max-width: 1229px) {
    gap: 20px;
  }

  ${media.lessThan("large")`
    display: none;
  `}
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
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 105%;
  color: #ffffff;
`;

export const WrapperOption2 = styled.div`
  display: flex;
  gap: 8px;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 105%;
  color: #ffffff;
`;

export const MenuIcon = styled(MenuAltRight)`
  width: 40px;
  color: #ffffff;
  align-self: center;
  display: none;
  cursor: pointer;

  ${media.lessThan("large")`
    display: grid;
  `}
`;

export const Img = styled.img`
  margin-left: 8px;
`;
