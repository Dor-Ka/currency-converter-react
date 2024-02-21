import styled, { css } from "styled-components";

export const StyledResult = styled.div`
  margin: 0 auto;
  padding: 5px;
  width: 100%;
  max-width: 200px;
  text-align: center;
  color: ${({ theme }) => theme.color.codGray};
  font-style: italic;

  ${({ primary }) => primary && css`
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 10px;
    min-height: 30px; 
  `}
`;