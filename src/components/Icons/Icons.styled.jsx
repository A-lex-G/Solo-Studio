import styled from "styled-components";
import transition from '../../utils/transition';
import { ContentColor, PinkTextColor, SignColor } from "../../utils/Colors";

export const Path = styled.path`
    fill: ${ContentColor};
    transition: fill ${transition};
    // stroke: #fff;

    &:hover,
    &:focus {
        fill: ${PinkTextColor};
    };
`;

export const Svg = styled.svg`
    width: 20px;
    height: 20px;
`;

export const SvgLine = styled.svg`
    width: 100px;
`

export const PathLine = styled.path`
    stroke: ${SignColor};
`