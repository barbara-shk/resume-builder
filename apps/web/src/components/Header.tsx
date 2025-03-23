import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, ${props => props.theme.colors.gradient.start}, ${props => props.theme.colors.gradient.end});
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.xl};
  color: white;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: 800;
  margin: 0;
  color: white;
  font-size: 1.7rem;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  
  span {
    position: relative;
    z-index: 1;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(255, 255, 255, 0.3);
      z-index: -1;
      transform: skew(-12deg);
    }
  }
`;

const LogoIcon = styled.div`
  margin-right: 12px;
  background: white;
  width: 36px;
  height: 36px;
  border-radius: ${props => props.theme.borderRadius.circle};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.primary};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing.large};
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: ${props => props.theme.borderRadius.medium};
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    
    &:after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 16px;
      right: 16px;
      height: 3px;
      background-color: white;
      border-radius: 2px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <LogoIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </LogoIcon>
          <span>ResumeAI</span>
        </Logo>
        <Nav>
          <NavLink href="#" className="active">Resume</NavLink>
          <NavLink href="#">Cover Letter</NavLink>
          <NavLink href="#">About</NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;