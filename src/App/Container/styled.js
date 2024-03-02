import styled from "styled-components";

export const Main = styled.main`
    margin: 20px;
    max-width: 800px;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.ghostWhite};
    border-radius: 10px;
`;