import { AboutStudio } from "../FooterAboutStudio/FooterAboutStudio"; 
import { Navigation } from "../FooterNav/FooterNav";
import { Contacts } from "../FooterContacts/FooterContacts";
import { Container } from "../StylesCommon/StylesCommon.styled";
import { StyledFooter } from "./Footer.styled";
import { InnerWrapper } from "../InnerWrapper/InnerWrapper.styled";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <InnerWrapper>
                    <AboutStudio />
                    <Navigation />
                    <Contacts />
                </InnerWrapper>
            </Container>
        </StyledFooter>
    )
}
