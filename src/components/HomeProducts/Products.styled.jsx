import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
    ContentColor,
    ContentColorSecondary,
    SignColor
} from "../../utils/Colors";
import transition from "../../utils/transition";

export const StyledSection = styled.section`
    width: 100%;
    padding-top: 40px;
`;

export const StyledTitle = styled.h2`
    color: ${ContentColor};
    text-align: left; 
`;

export const StyledSpan = styled.span`
    color: ${SignColor};
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 10px;
`;

export const ProductsList = styled.ul`
    display: flex;
    flex-direction: column;
    
    list-style: none;
    row-gap: 50px;
    padding: 40px 0;
`;

export const Item = styled.li`
    display: flex;
    column-gap: 100px;
    justify-content: space-around;
    color: ${ContentColor};

    &:nth-child(2n){
        flex-direction:row-reverse;
    }
`;

export const InnerItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    row-gap: 10px;
    justify-content: center;
`

export const ServiceTitle = styled.h3`
    color: ${ContentColorSecondary};
`

export const StyledLink = styled(NavLink)`
    display: inline;
    width: fit-content;
    padding: 5px 5px;
    border: 1px solid ${ContentColor};
    border-radius: 50px;
    text-decoration: none;
    color: ${ContentColor};

    transition:
        color ${transition},
        border-color ${transition};
    
    &:hover,
    &:focus {
        color: ${SignColor};
        border-color: ${SignColor};
    }
`;

export const StyledImg = styled.img`
    width: 400px;
    border-radius: 5px;
`