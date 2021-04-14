import styled, { css } from "styled-components";

export const Title = styled.div`
  cursor: pointer;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  background: white;
  color: black;
  margin-top: 2.1875rem;
  position: absolute;
  right: 100;
`;

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

export const WrapperContent = styled.div`
  box-sizing: border-box;
  padding: 44px 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "title title"
    "escola social"
    "game mobile";
  width: 643px;
  height: 263px;
`;

export const WrapperDescriptions = styled.div`
  display: flex;
  gap: 1.3125rem;
  align-items: center;
`;

export const Descriptions = styled.h4`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 125%;
  letter-spacing: 0.005em;
  color: #130c25;
`;

export const SubTitle = styled.h4`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8125rem;
  line-height: 150%;
  color: #423d51;
`;

export const Icon = styled.img`
  width: 30.7104px;
  height: 31.5696px;
`;

export const WrapperData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  cursor: pointer;
`;

export const WrapperSolutions = styled.div`
  display: flex;
  grid-area: title;
`;

export const Solutions = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 105%;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #5f41d9;
`;

export const Li = styled.li`
  display: flex;
  gap: 12px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 105%;
  color: white;
  opacity: 0.9;
`;
