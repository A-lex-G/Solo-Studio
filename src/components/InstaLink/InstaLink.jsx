import { InstaIcon } from "../Icons/Instagram";
import { StyledLink } from "./InstaLink.styled";

export const InstaLink = () => {
    return (
        <StyledLink
            to={'https://www.instagram.com/sologub.permanent'}>
            Follow us:
            <InstaIcon/>
        </StyledLink>
    )
}