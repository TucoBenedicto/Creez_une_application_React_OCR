import { useParams, Link } from "react-router-dom";

function Survey() {
  const { questionNumber } = useParams(1);

  // console.log("questionNumber Type :",typeof questionNumber);
  let questionNumberParseInt = parseInt(questionNumber);
  // console.log("questionNumberParseInt",typeof questionNumberParseInt);

  let previousPage =
    questionNumberParseInt === 1 ? 1 : questionNumberParseInt - 1;
  //console.log("nextPage",typeof nextPage);

  // let nextPage = questionNumberParseInt + 1;

  //Fonction classique
  /*   function nextPage() {
    let nextPage = questionNumberParseInt + 1;
    return questionNumberParseInt === 10 ? (
      <Link to={`/results}`}>Result</Link>
    ) : (
      <Link to={`/survey/${nextPage}`}>Suivant</Link>
    );
  } */

  //Fonction fleché
  const nextPage = () => {
    let nextPage = questionNumberParseInt + 1;
    return questionNumberParseInt === 10 ? (
      <Link to={`/results`}>Result</Link>
    ) : (
      <Link to={`/survey/${nextPage}`}>Suivant</Link>
    );
  };

  return (
    <div>
      <h1>Questionnaire 🧮</h1>

      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${previousPage}`}>Précédent</Link>
      {nextPage()}
    </div>
  );
}

export default Survey;
