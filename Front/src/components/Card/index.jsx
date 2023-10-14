import PropTypes from "prop-types";
import styled from "styled-components";
import DefaultPicture from "../../assets/profile.jpg";
import colors from "../../utils/style/colors";

function Card({ label, title, picture }) {

  const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`
const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`
const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

  const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
  `;


  return (
    /*     <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
    </div> */

    <>
      <CardWrapper>
        <CardLabel>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    </>
  );
}

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

Card.defaultProps = {
  label: "",
  title: "",
  picture: DefaultPicture,
};

export default Card;
