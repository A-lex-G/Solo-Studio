import { Container } from './Home.styled';
// import example from '../../assets/example.png';
import Hero from '../../components/Hero/Hero';
import Products from '../../components/HomeProducts/Products';
import AboutStudio from '../../components/AboutStudio/AboutStudio';
import { Owner } from '../../components/HomeOwner/Owner';
// import Team from '../../components/Team/Team';
// import { Gallery } from '../../components/Gallery/Gallery';


const HomePage = () => {
  
  return (
    <Container>
      <Hero/>
      <AboutStudio/>
      <Products />
      <Owner/>
      {/* <Gallery/> */}
      {/* <Team/> */}
    </Container>
  );
};

export default HomePage;
