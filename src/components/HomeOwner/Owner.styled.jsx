import styled from "styled-components";
import {
    ContentColor, ContentColorSecondary
} from "../../utils/Colors";

export const TitleWRAPPER = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    row-gap: 10px;
`;

export const StyledTITLE = styled.h2`
    color: ${ContentColor}
`;

export const StyledNAME = styled.p`
    // text-align: right;
    color: ${ContentColor};
    font-weight: 600;
    font-size: 20px;
`;

export const StyledIMG = styled.img`
    width: 300px;
    // border: 2px solid #fff;
    border-radius: 5px;
`;
export const StyledInnerDIV = styled.div`
    display: flex;
    align-items:center;
    padding: 10px 0;
    column-gap: 10px;
`;

export const StyledTEXT = styled.p`
    color: ${ContentColor};
    text-align: justify;
`;