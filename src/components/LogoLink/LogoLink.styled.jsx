import { Link } from "react-router-dom";
import styled from "styled-components";
import transition from '../../utils/transition';
import {
    Path,
    Svg
} from "../Icons/Icons.styled";
import {
    PinkTextColor,
    ContentColor
} from "../../utils/Colors";

export const StyledLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    column-gap: 8px;
    // padding-top: 5px;
    // padding-bottom: 5px;
    color: ${ContentColor};
    font-size: 18px;

    transition:
        color ${transition};
    
    &:hover,
    &:focus {
        color: ${PinkTextColor};
        text-shadow:
            0 0 5px ${PinkTextColor},
            0 0 10px ${PinkTextColor},
            0 0 20px ${PinkTextColor},
            0 0 40px ${PinkTextColor},
            0 0 80px ${PinkTextColor};

        ${Svg} ${Path} {
            transition: fill ${transition};
            fill: #ca00ff;
        };
    };
`