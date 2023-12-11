import { Link } from "react-router-dom";
import {
    StyledSection,
    TeamTitle,
    TeamList,
    Item,
    Image,
    PersonalDataWrapper,
    StyledSpan,
    TitleWrapper
} from './Team.styled';
import SvitlanaImg from '../../images/Sweetlana.jpeg';
import DefaultImg from '../../images/defaultImg.png';
import { Container } from "../StylesCommon/StylesCommon.styled";
import { Line } from "../Icons/Line";

const Team = () => {
    return (
        <StyledSection>
            <Container>
                <TitleWrapper>
                    <TeamTitle>
                        Our {' '}
                        <StyledSpan>
                            Team
                        </StyledSpan>
                    </TeamTitle>
                    <Line />
                </TitleWrapper>
                <TeamList>
                    <Item>
                        <Image
                            src={`${SvitlanaImg}`}
                            alt="Master & Trainer" />
                        <PersonalDataWrapper>
                            <p>
                                Svitlana
                            </p>
                            <span>
                                Founder, Top-Master, Trainer
                            </span>
                            <Link>
                            </Link>
                        </PersonalDataWrapper>
                    </Item>
                    <Item>
                        <Image
                            src={`${DefaultImg}`}
                            alt="" />
                        <PersonalDataWrapper>
                            <p>
                                Irina
                            </p>
                            <span>
                                Master, Trainer
                            </span>
                            <Link>
                            </Link>
                        </PersonalDataWrapper>
                    </Item>
                    <Item>
                        <Image
                            src={`${DefaultImg}`}
                            alt="" />
                        <PersonalDataWrapper>
                            <p>
                                Daria
                            </p>
                            <span>
                                Manager
                            </span>
                            <Link>
                            </Link>
                        </PersonalDataWrapper>
                    </Item>
                </TeamList>
            </Container>
        </StyledSection>
    )
};

export default Team;