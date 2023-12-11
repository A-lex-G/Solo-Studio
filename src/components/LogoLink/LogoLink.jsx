import { Logo } from "../Icons/Logo";
import { StyledLink } from "./LogoLink.styled";

export const LogoLink = () => {
    return (
        <StyledLink
            to={'/'}>
            <Logo />
            Solo Studio
        </StyledLink>
    )
}