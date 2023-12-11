import { Link } from "react-router-dom";
import { LinkWrapper, StyledLink } from "./FooterNav.styled";

export const Navigation = () => {
    return (
        <LinkWrapper>
            <StyledLink
                to={`/`}>
                Home
            </StyledLink>     
            <StyledLink
                to={'/permanent'}>
                Permanent Makeup
            </StyledLink>
            <StyledLink
                to={'/trainings'}>
                Trainings&Courses
            </StyledLink>
            <StyledLink
                to={'/store'}>
                Equipment&Accessories
            </StyledLink>
        </LinkWrapper>
    )
};