import styled from "styled-components";
import { ContentColor } from "../../utils/Colors";

export const StyledSECTION = styled.section`
    padding-top: 40px;
`;

export const StyledUL = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    
    color: ${ContentColor};

    &:nth-child(2n){
        object-position: right bottom;
        border-bottom-right-radius: 15px;
    };
`;