import styled from "styled-components";
import logo from "../../assets/light-logo.png";
import { StyledLink } from "../../utils/style/StyledLink";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeLogo = styled.img`
  height: 70px;
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={logo} />
      </Link>

      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
