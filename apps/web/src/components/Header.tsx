import styled from 'styled-components';
import { GradientCircle, CircleOutline } from './ui/GradientComponents'; 

const HeaderWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const HeaderContainer = styled.header`
  background: transparent;
  padding: ${props => props.theme.spacing.large} ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.text};
  position: relative;
  z-index: 1;
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
  font-weight: ${props => props.theme.fontWeights.light};
  margin: 0;
  color: ${props => props.theme.colors.text};
  font-size: 1.7rem;
  letter-spacing: ${props => props.theme.letterSpacing.tight};
  display: flex;
  align-items: center;
  
  span {
    position: relative;
    z-index: 1;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: -2px;
      width: 105%;
      height: 8px;
      background: linear-gradient(
        90deg,
        ${props => props.theme.colors.gradient.start}40,
        ${props => props.theme.colors.gradient.end}40
      );
      z-index: -1;
      border-radius: 4px;
    }
  }
`;

const LogoIcon = styled.div`
  margin-right: 12px;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.gradient.start},
    ${props => props.theme.colors.gradient.end}
  );
  width: 36px;
  height: 36px;
  border-radius: ${props => props.theme.borderRadius.circle};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing.large};
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.heading};
  padding: 8px 0;
  position: relative;
  transition: ${props => props.theme.transitions.default};
  
  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transitions.default};
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }
  
  &.active {
    color: ${props => props.theme.colors.primary};
    
    &::after {
      width: 100%;
      background: linear-gradient(
        90deg,
        ${props => props.theme.colors.gradient.start},
        ${props => props.theme.colors.gradient.end}
      );
    }
  }
`;

const DecoLine = styled.div`
  width: 40px;
  height: 1px;
  background-color: ${props => props.theme.colors.border};
  position: absolute;
  right: 10%;
  top: 40%;
  transform: rotate(-30deg);
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <GradientCircle 
        size="300px" 
        position={{ top: '-200px', right: '-100px' }} 
        zIndex={0}
        animate={true}
      />
      <CircleOutline 
        size="80px" 
        position={{ top: '40px', right: '30%' }} 
        zIndex={0}
      />
      <DecoLine />
      
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
    </HeaderWrapper>
  );
};

export default Header;