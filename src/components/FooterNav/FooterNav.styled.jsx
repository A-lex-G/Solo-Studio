import styled from "styled-components";
import { Link } from "react-router-dom";
import { DefaultTextColor, PinkTextColor } from "../../utils/Colors";
import transition from "../../utils/transition";

export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StyledLink = styled(Link)`
    // display: block;
    color: ${DefaultTextColor};
    transition:
        color ${transition};

    &:hover,
    &:focus{
        color: ${PinkTextColor}
    }
`;