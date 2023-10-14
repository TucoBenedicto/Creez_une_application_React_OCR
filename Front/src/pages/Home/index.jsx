import styled from "styled-components";
import HomeIllustration from "../../assets/home-illustration.svg";
import colors from "../../utils/style/colors";
import { StyledLink } from "../../utils/style/StyledLink";

const HomeWrapper = styled.div`
  background-color: ${colors.background};
  //border: 1px solid #2d2d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  margin: 0 auto; /* Ajout d'une marge automatique pour centrer */
  /* haut | droit | bas | gauche */
  padding: 0 60px 0px 60px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`;

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`;

const Illustration = styled.img`
  flex: 1;
`;

function Home() {
  return (
    <HomeWrapper>
      <LeftCol>
        <StyledTitle>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </StyledTitle>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </LeftCol>

      <Illustration src={HomeIllustration} />
    </HomeWrapper>
  );
}

export default Home;
