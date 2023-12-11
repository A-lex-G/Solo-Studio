import {
  // StyledLink,
  StyledHeader,
  NavLinkWrapper,
  StyledNavLink,
  // IconWrapper,
} from './Header.styled';
import { Switcher } from '../SwitchTheme/SwitchTheme';
import { LogoLink } from '../LogoLink/LogoLink';
import { Container } from '../StylesCommon/StylesCommon.styled';
import { InnerWrapper } from '../InnerWrapper/InnerWrapper.styled';
// import sprite from '../../assets/sprite.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <InnerWrapper>
          <LogoLink />
          <NavLinkWrapper>
            <StyledNavLink
              to={'/'}>
              Home
            </StyledNavLink>
            <StyledNavLink
              to={'/permanent'}>
              Permanent Makeup
            </StyledNavLink>
            <StyledNavLink
              to={'/trainings'}>
              Trainings&Courses
            </StyledNavLink>
            <StyledNavLink
              to={'/store'}>
              Equipment&Accessories
            </StyledNavLink>
          </NavLinkWrapper>
          <Switcher />
        </InnerWrapper>
      </Container>
    </StyledHeader>
  )
};
