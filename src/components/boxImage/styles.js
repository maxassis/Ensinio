import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  width: 100%;
  height: 43.75rem;
  background: linear-gradient(259.95deg, #41b5d9 2.25%, #5f41d9 100.27%);

  ${media.lessThan("small")`
  height: 47.5rem;
  `}
`;

export const WrapperInformations = styled.div`
  height: 38.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  ${media.lessThan("small")`
  padding-top: 2.1875rem;
  `}

  ${media.lessThan("large")`
  grid-template-columns: 1fr;
  `}
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.75rem;

  ${media.lessThan("large")`
  align-items: center;
  `}
`;

export const WrapperImage = styled.div`
  display: flex;
  align-items: flex-end;

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const Text1 = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 105%;

  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.75;
`;

export const Text2 = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 2.75rem;
  line-height: 3rem;
  letter-spacing: -0.03em;
  color: #ffffff;

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const Text3 = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #ffffff;
  opacity: 0.9;

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const WrapperButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 0.25rem;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`;

export const FirstButton = styled.button`
  width: 11.5rem;
  height: 3.5rem;
  left: 7rem;
  top: 32.625rem;
  background: #00e1e7;
  border-radius: 5rem;
  border: none;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 125%;
  color: #130c25;
  outline: none;
`;

export const WatchVideo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 125%;
  color: #ffffff;
`;

export const Text2Hide = styled.p`
  display: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 2.6875rem;
  line-height: 3rem;
  letter-spacing: -0.03em;
  color: #ffffff;

  ${media.lessThan("large")`
    display: block;
  `}
`;

export const Text3Hide = styled.p`
  display: none;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #ffffff;
  opacity: 0.9;

  ${media.lessThan("large")`
    display: block;
   
  `}
`;
