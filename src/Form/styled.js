import styled from "styled-components";

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
`;

export const FormField = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
`; 

export const Info = styled.p`
    font-size: 14px;
    text-align: center;
    color: #eee;
`;

export const Button = styled.button`
    background-color: hsl(180, 97%, 40%);
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 100%;
    color: white;

    &:hover {
        background-color: hsl(180, 97%, 44%);
        cursor: pointer;
    }

    &:active {
        background-color: hsl(180, 97%, 46%);
    }
`;

export const Header = styled.h1`
    color: hsl(180, 97%, 40%);
    margin: 14px;
`;