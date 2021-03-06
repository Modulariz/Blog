import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  @media (max-width: 700px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  @media (min-width: 1750px) {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  white-space: normal;
`;

export const Description = styled.h2`
  font-size: 1rem;
  white-space: normal;
  line-height: 2rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
  @media (min-width: 1750px) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 15px;
  }
`;


export const Date = styled.p`
  text-align: right;
  font-size: 0.8rem;
  white-space: normal;
  line-height: 0.8rem;
  @media (max-width: 700px) {
    font-size: 0.7rem;
    line-height: 0.7rem;
    margin-bottom: 0;
  }
`;