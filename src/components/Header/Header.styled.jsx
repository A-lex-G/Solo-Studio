import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import transition from '../../utils/transition';
import {
  ContentColor,
  PinkTextColor
} from '../../utils/Colors';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  border: 2px solid ${ContentColor};
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow:
    0 0 5px ${ContentColor},
    0 0 10px ${ContentColor},
    0 0 20px ${ContentColor},
    0 0 40px ${ContentColor},
    0 0 80px ${ContentColor};

  transition:
    border-color ${transition},
    box-shadow ${transition};

  &:hover,
  &:focus {
    border-color: ${PinkTextColor};
    box-shadow:
      0 0 5px ${PinkTextColor},
      0 0 10px ${PinkTextColor},
      0 0 20px ${PinkTextColor},
      0 0 40px ${PinkTextColor},
      0 0 80px ${PinkTextColor};
    }
  }
`;

export const HeaderContainer = styled.div`
  padding: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${ContentColor};

  transition:
    color ${transition},
    text-shadow ${transition};

  &:hover,
  &:focus {
    color: ${PinkTextColor};
    text-shadow:
      0 0 5px ${PinkTextColor},
      0 0 10px ${PinkTextColor},
      0 0 20px ${PinkTextColor},
      0 0 40px ${PinkTextColor},
      0 0 80px ${PinkTextColor};
  }
`