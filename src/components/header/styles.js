import styled, { css } from "styled-components";
import media from "styled-media-query";
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight";

export const Wrapper = styled.div`
  width: 100%;
  height: 5.5rem;
  background: rgba(0, 0, 0, 0.03);
`;

export const WrapperMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 5.5rem;

  ${media.lessThan("large")`
    display: flex;
    height: 5.5rem;
    justify-content: space-between;
    
  `}
`;

export const Logo = styled.div`
  display: flex;

  img {
    width: 7.5625rem;
  }
`;

export const Options = styled.ul`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  li {
    display: flex;
    gap: 0.75rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 105%;
    color: white;
    opacity: 0.9;

    :hover {
      color: #333333;
      transition: all 0.5s ease-in;
      transition-delay: 0.05s;
      border-color: #333333;
      cursor: pointer;
    }
  }

  @media (max-width: 76.8125rem) {
    gap: 1.25rem;
  }

  ${media.lessThan("large")`
    display: none;
    
  `}
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  img {
    width: 0.9375rem;
  }

  @media (max-width: 76.8125rem) {
    gap: 1.25rem;
  }

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const Button = styled.button`
  width: 10rem;
  height: 2.5rem;
  left: 68.125rem;
  top: 1.5rem;
  opacity: 0.8.5;
  border: 0.0625rem solid #ffffff;
  box-sizing: border-box;
  border-radius: 5rem;
  cursor: pointer;
  background-color: transparent;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 105%;
  color: #ffffff;

  :hover {
    color: #333333;
    transition: all 0.5s ease-in;
    transition-delay: 0.05s;
    border-color: #333333;
  }
`;

export const WrapperOption1 = styled.div`
  gap: 0.6563rem;
  display: flex;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 105%;
  color: #ffffff;

  span {
    :hover {
      color: #333333;
      transition: all 0.5s ease-in;
      transition-delay: 0.05s;
      border-color: #333333;
      cursor: pointer;
    }
  }
`;

export const WrapperOption2 = styled.div`
  display: flex;
  gap: 0.5rem;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 105%;
  color: #ffffff;
`;

export const MenuIcon = styled(MenuAltRight)`
  width: 2.5rem;
  color: #ffffff;
  align-self: center;
  display: none;
  cursor: pointer;

  ${media.lessThan("large")`
    display: grid;
  `}
`;

export const Img = styled.img`
  margin-left: 0.5rem;
`;

///// MENU FULL

export const MenuFull = styled.div`
  ${({ isOpen }) => css`
    display: flex;
    flex-direction: column;
    background: #f2f5fa;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
    pointer-events: none;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? "all" : "none"};
    padding: 1.875rem;
    z-index: 1;
  `}
`;

export const ContainerMenus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.1875rem;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    color: #432e98;
  }

  span {
    font-size: 1.5625rem;
  }
`;

export const Span = styled.span`
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5625rem;
  line-height: 1.5rem;
  color: #432e98;

  :hover {
    color: #00e1e7;
  }
`;
