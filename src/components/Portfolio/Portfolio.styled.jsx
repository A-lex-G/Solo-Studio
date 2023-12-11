import styled from "styled-components";
import { ContentColorSecondary } from "../../utils/Colors";

export const OuterWRAPPER = styled.div`
    display: flex;
    width: 100%;
    // border: 1px solid crimson;
    border-radius: 4px;
    overflow: hidden;
`;

export const StyledInnerWRAPPER = styled.div`
    position: relative;
    width: 25%;
    height: 400px;
    overflow: hidden;
`;

export const StyledTITLE = styled.h2`
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    text-align: center;
    color: ${ContentColorSecondary};
    background-color: #000;
    opacity: 0.7;
`;

export const StyledScrollWRAPPER = styled.div`
    max-height: 400px; /* Замініть на необхідну висоту */
    overflow-y: auto; /* або overflow-y: scroll; */

        &::-webkit-scrollbar {
            display: none; /* Сховати панель прокрутки для WebKit (Chrome, Safari) */
        }
`;