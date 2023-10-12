import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import logo from "../../assets/light-logo.png";

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <HeaderWrapper>
      <img src={logo} alt="Italian Trulli" />

      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
