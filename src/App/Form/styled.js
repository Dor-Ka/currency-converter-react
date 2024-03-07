import styled from "styled-components";

export const LabelText = styled.label`
    width: 100%;
    max-width: 400px;
    display: inline-block;
`;

export const Fieldset = styled.fieldset`
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.color.ghostWhite};
    border-radius: 10px;
    padding: 5px;
    width: 100%;
    max-width: 400px;
    text-align: center;
`;
export const FormButton = styled.button`
     margin: 0 auto;
     width: 100%;
     max-width: 400px;
     min-height: 25px;
     border: none;
     background-color: ${({ theme }) => theme.color.gray};
     border-radius: 10px;
     box-shadow: 10px 10px 30px ${({ theme }) => theme.color.gray};
     cursor: pointer;

     &:hover {
        filter: brightness(90%)
     }

     &:active {
        filter: brightness(80%)
     }
`;

export const Legend = styled.legend`
    width: 100%;
    max-width: 400px;
    padding: 5px;
    background-color: ${({ theme }) => theme.color.gray};
    border-radius: 10px;
    box-shadow: 10px 10px 20px ${({ theme }) => theme.color.gray};
`;

export const FormField = styled.p`
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 10px;
    padding: 5px;
    width: 100%;
    max-width: 400px;
    text-align: center;
    color: ${({ theme }) => theme.color.dimGray};
    font-style: italic;

    border: none;

`;

export const Input = styled.input`
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 10px;
    padding: 5px;
    width: 100%;
    max-width: 400px;
    text-align: center;
    color: ${({ theme }) => theme.color.dimGray};
    font-style: italic;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.darkGreen};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.lipstick};
`;