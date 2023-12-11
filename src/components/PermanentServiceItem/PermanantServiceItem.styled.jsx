import styled from "styled-components";
import {
    ContentColor,
    ContentColorSecondary,
    SignColor
} from "../../utils/Colors";
import transition from "../../utils/transition";

export const StyledLI = styled.li`
    display: flex;
    align-items: center;
    // background-color: #f7f7f9;

    &:nth-child(2n){
        flex-direction:row-reverse;
    };
`;

export const StyledInnerDIV = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    flex: 1;
    padding: 0 40px;
    // border: 2px solid ${SignColor};
`;

export const StyledTITLE = styled.h2`
    color: ${ContentColorSecondary};
`;

export const StyledIMG = styled.img`
    width: 50%;
    border-radius: 5px;
`;

export const StyledDESCRIPTION = styled.p`
    text-align: justify;
`;

export const StyledButtonDIV = styled.div`
    display: flex;
    justify-content: flex-end;
    column-gap: 30px;
`;

export const StyledButton = styled.button`
    display: inline;
    width: fit-content;
    padding: 5px 5px;
    border: 1px solid ${ContentColor};
    border-radius: 50px;
    text-decoration: none;
    color: ${ContentColor};
    background-color: transparent;

    transition:
        color ${transition},
        border-color ${transition};
    
    &:hover,
    &:focus {
        color: ${SignColor};
        border-color: ${SignColor};
    }
`;