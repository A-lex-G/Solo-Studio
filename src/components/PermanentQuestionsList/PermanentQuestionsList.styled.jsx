import styled from "styled-components";
import { ContentColor } from "../../utils/Colors";

export const StyledTITLE = styled.h2`
    color: ${ContentColor}
`;

export const TitleWRAPPER = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 10px;
`;

export const StyledQuestionLIST = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 30px 0;
`;