import styled from "styled-components";
import imgBack from "../../assets/home-illustration.svg";

function Home() {
  const HomeWrapper = styled.div`
    background-color: red;
    width: 200px;
    border: 1px solid #2d2d2d;
    display: flex;
    justify-content: center;

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
