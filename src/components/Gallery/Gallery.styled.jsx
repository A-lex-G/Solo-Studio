import styled from "styled-components";
import {
    ContentColor,
    ContentColorSecondary,
    SignColor
} from "../../utils/Colors";

export const StyledSECTION = styled.section`
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;   
`;

export const TitleWRAPPER = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
`;

export const StyledTITLE = styled.h2`
    color: ${ContentColor};
    text-align: left; 
`;

export const StyledSPAN = styled.span`
    color: ${SignColor};
`;

export const StyledUL = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 10px;
    margin-top: 10px;
    color: ${ContentColorSecondary};
`;

export const StyledIMG = styled.img`
    width: 100%;
    border-radius: 5px;
`;