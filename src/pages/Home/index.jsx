import styled from "styled-components";
import imgBack from "../../assets/home-illustration.svg";

function Home() {
  const HomeWrapper = styled.div`
    background-color: #e7e7e7;
    //border: 1px solid #2d2d2d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto; /* Ajout d'une marge automatique pour centrer */

  `;

  return (
    <HomeWrapper>
      <h1>
        Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
      </h1>

      <img src={imgBack} alt="Italian Trulli" />
    </HomeWrapper>
  );
}

export default Home;
