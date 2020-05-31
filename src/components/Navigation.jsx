/* eslint no-unused-expressions: 0 */

import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import { SocialIcon } from 'react-social-icons';
import Logo from '../icons/Logo';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  svg {
    height: 2.25 rem;
    margin-bottom: 0;
  }
`;

const LogoText = styled.span`
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fontFamily.heading};
  font-size: 1.25rem;
  margin-left: 0;
  color: ${(props) => props.theme.colors.white.base};
  @media (max-width: 500px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${(props) => props.theme.fontFamily.heading};
  align-items: center;
  a {
    color: ${(props) => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${(props) => props.theme.transitions.default.duration};
    &:hover {
      color: ${(props) => props.theme.colors.white.blueish};
    }
    &:focus {
      color: ${(props) => props.theme.colors.white.base};
    }
  }
`;

const Navigation = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <Logo />
      <LogoText>Leon Li</LogoText>
    </StyledLink>
    <Nav>
      <LogoText>
        <SocialIcon url="https://www.linkedin.com/in/leonlee-live" bgColor="#4276b4" />
      </LogoText>
      <LogoText>
        <SocialIcon url="https://github.com/leon-lee-jl" bgColor="#f5f5f5" />
      </LogoText>
      <LogoText>
        <SocialIcon url="mailto: leon.lee@berkeley.edu" bgColor="#9d007d" />
      </LogoText>
    </Nav>
  </Headroom>
);

export default Navigation;
