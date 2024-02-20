import styled from "styled-components";

export const StyledResult = styled.p`
  margin: 0 auto;
  padding: 5px;
  width: 100%;
  max-width: 200px;
  text-align: center;
  color: ${({ theme }) => theme.color.codGray};
  font-style: italic;
`;

export const InputResult = styled.p`
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 10px;
  padding: 5px;
  width: 100%;
  min-height: 30px; 
  max-width: 400px;
  text-align: center;
  color: ${({ theme }) => theme.color.codGray};
  font-style: italic;
`;
