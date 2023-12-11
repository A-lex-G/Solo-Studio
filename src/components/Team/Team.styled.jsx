import styled from "styled-components";
import transition from '../../utils/transition';
import {
    PinkTextColor,
    ContentColor,
    SignColor
} from "../../utils/Colors";

export const StyledSection = styled.section`
    width: 100%;
    padding-top: 40px;
`;

export const TeamList = styled.ul`
    display: flex;
    justify-content: center;
    column-gap: 40px;
    padding: 40px 0;
    width: 100%;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 10px;
`;

export const TeamTitle = styled.h2`
    color: ${ContentColor};
    text-align: left;
`;

export const StyledSpan = styled.span`
    color: ${SignColor};
`;

export const Item = styled.li`
    width: 200px;
    border: 3px solid ${ContentColor};
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    color: ${ContentColor};
    transform: scale(0.9);
    box-shadow:
        0 0 5px ${ContentColor},
        0 0 10px ${ContentColor},
        0 0 20px ${ContentColor},
        0 0 40px ${ContentColor},
        0 0 80px ${ContentColor};
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

export const Image = styled.img`
    width: 100%;
`;

export const PersonalDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;