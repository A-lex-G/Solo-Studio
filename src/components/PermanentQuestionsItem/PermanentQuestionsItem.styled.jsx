import styled from "styled-components";
import { ContentColor, ContentColorSecondary, SignColor } from "../../utils/Colors";
import transition from "../../utils/transition";

export const StyledLI = styled.li`
    color: ${ContentColor};
`;

export const StyledQUESTION = styled.p`
    // color: ${ContentColorSecondary};
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;

    transition:
        color ${transition};

    &:hover,
    &:focus{
        color:${ContentColorSecondary};
    }
`;

export const StyledANSWER = styled.p`
    color: ${SignColor};
`;