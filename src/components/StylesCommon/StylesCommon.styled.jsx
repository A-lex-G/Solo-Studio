import styled from "styled-components";
import { ContentColor, SignColor } from "../../utils/Colors";

export const StyledSECTION = styled.section`
    width: 100%;
    padding-top: 40px;
`;

export const Container = styled.div`
    max-width: 1160px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    min-width: 320px;
    color: ${ContentColor};
`;

export const StyledSPAN = styled.span`
    color: ${SignColor};
`;