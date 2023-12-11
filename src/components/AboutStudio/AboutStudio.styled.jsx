import styled from "styled-components";
import { ContentColor, SignColor } from "../../utils/Colors";

export const StyledSection = styled.section`
    padding-top: 40px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    column-gap: 20px;
    align-items: center;
    column-gap: 20px;
`;

export const ImageThumb = styled.div`
    display: flex;
    column-gap: 10px;
    // position: relative;
    width: 620px;
    height: 305px;
`;

export const ImageContainer = styled.div``

export const StyledImg = styled.img`
    display: block;
    width: 300px;
    object-fit: contain;
    object-position: left top;
    border: 3px solid transparent;
    border-top-left-radius: 15px;
    // position: absolute;
    // outline: 1px solid tomato;

    &:nth-child(2n){
        // position: absolute;
        // z-index: -1;
        object-position: right bottom;
        border-bottom-right-radius: 15px;
    };
`;

export const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
`;

export const StyledTitle = styled.h2`
    color: ${ContentColor};
    text-align: center;
`;
export const StyledSpan = styled.span`
    color: ${SignColor};
`

export const StudioText = styled.p`
    color: ${ContentColor};
    text-align: left;
`;