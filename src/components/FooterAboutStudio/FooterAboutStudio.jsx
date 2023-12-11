import { LogoLink } from "../LogoLink/LogoLink";
import {
    StyledWrapper,
    StyledText
} from "./FooterAboutStudio.styled";

export const AboutStudio = () => {
    return (
        <StyledWrapper>
            <LogoLink/>
            <StyledText>
                Embark on a journey of enduring beauty with Solo Studio.
            </StyledText>
        </StyledWrapper>
    )
}