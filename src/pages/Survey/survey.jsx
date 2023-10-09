import { useParams , Link} from "react-router-dom";

function Survey() {
  const { questionNumber } = useParams();

  
   function sayHello(){
    return parseInt(questionNumber+1)
   }

  return (
    <div>
      <h1>Questionnaire 🧮</h1>

      <Link to={`/survey/${sayHello()}`}>Précédent</Link>

      <h2>Question {questionNumber}</h2>
    </div>
  );
}

export default Survey;
