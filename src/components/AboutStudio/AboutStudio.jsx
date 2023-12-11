import { Container } from "../StylesCommon/StylesCommon.styled";
import {
    StyledSection,
    ContentWrapper,
    ImageThumb,
    StyledImg,
    StyledTextWrapper,
    StyledTitle,
    StyledSpan,
    StudioText
} from "./AboutStudio.styled";
import Image from '../../images/Studio.jpg';
import ImageSecondary from '../../images/StudioSecondary.jpg';
import { Line } from "../Icons/Line";


const AboutStudio = () => {
    return (
        <StyledSection>
            <Container>
                <ContentWrapper>
                    <ImageThumb>
                        <StyledImg
                            src={`${Image}`}
                            alt="" />
                        <StyledImg
                            src={`${ImageSecondary}`}
                            alt="" />
                    </ImageThumb>
                    <StyledTextWrapper>
                        <StyledTitle>
                            <StyledSpan>
                                Who {' '}
                            </StyledSpan>
                            we are {' '}
                            <StyledSpan>
                                ?...
                            </StyledSpan>
                        </StyledTitle>
                        <Line/>
                        <StudioText>
                            We are more than just a studio, we are your gateway to the world of timeless beauty.
                            Our passion for artistic expression drives us to offer a diverse range of services.
                            From expertly crafted permanent makeup to comprehensive professional training,
                            we are dedicated to being your trusted partner in your quest for lasting beauty.
                            Our commitment to excellence extends to curating and delivering the latest industry equipment and accessories.
                            Discover the art of perpetual beauty at Solo Studio, where your beauty journey finds its true expression.
                        </StudioText>
                    </StyledTextWrapper>
                </ContentWrapper>
            </Container>
        </StyledSection>
    )
};

export default AboutStudio;