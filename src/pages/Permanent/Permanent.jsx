// import Team from '../../components/Team/Team';
import {
  Container,
  Title,
  GeneralText,
  StyledLink
} from './Permanent.styled';
import { permanentItems } from '../../components/ItemsPermanent/ItemsPermanent';
import { AboutPermanentGeneral } from '../../components/PermanentGeneral/PermanentGeneral';
import { ServiceList } from '../../components/PermanentServiceList/PermanentServiceList';
import { Gallery } from '../../components/Gallery/Gallery';
import { Questions } from '../../components/PermanentQuestionsList/PermanentQuestionsList';
import { Feedback } from '../../components/PermanentFeedback/Feedback';
// import { Portfolio } from '../../components/Portfolio/Portfolio';

const AboutPermanent = () => {

  return (
    <Container>
      <AboutPermanentGeneral />
      <ServiceList
        serviceslist={permanentItems} />
      {/* <Portfolio /> */}
      <Gallery />
      <Questions
        servicesList={permanentItems} />
      <Feedback/>
      {/* <Team /> */}
        {/* <StyledLink
          to="/second/5">
          Half
        </StyledLink> */}
    </Container>
  );
};

export default AboutPermanent;
