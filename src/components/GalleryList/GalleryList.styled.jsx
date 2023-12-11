import styled from "styled-components";
import { ContentColor, PinkTextColor } from "../../utils/Colors";
import transition from "../../utils/transition";

export const StyledUL = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap:20px;
    margin-top: 10px;
`;

export const StyledIMG = styled.img`
    width: 300px;
    border-radius: 5px;
    margin: auto;
    cursor: pointer;

    transform: scale(0.9);
    // box-shadow:
    //     0 0 5px ${ContentColor},
    //     0 0 10px ${ContentColor},
    //     0 0 20px ${ContentColor},
    //     0 0 40px ${ContentColor},
    //     0 0 80px ${ContentColor};
    transition:
        border-color ${transition},
        color ${transition},
        text-shadow ${transition},
        transform ${transition};

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 1;
        transition:
            opacity ${transition};
    };

    &:hover,
    &:focus {
        border-color: ${PinkTextColor};
        color: ${PinkTextColor};
        transform: scale(1);
        box-shadow:
            0 0 5px ${PinkTextColor},
            0 0 10px ${PinkTextColor},
            0 0 20px ${PinkTextColor},
            0 0 40px ${PinkTextColor},
            0 0 80px ${PinkTextColor};
    };

    &:hover::before,
    &:focus::before {
        opacity: 0;
    };
`;