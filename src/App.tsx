import React, {useState}  from 'react';
import './App.css';
import QuestionList from './components/QuestionList';
import QuizSummary from './components/QuizSummary';
import Typewriter from  'typewriter-effect';

function App() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0)
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick =  (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    else{
      setWrong(wrong +1 )
    }
    setClicked(true);
  };

  const handleNextClicked =() => {
    setClicked(false);
    if (currentQuestion < QuestionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } 
    else {
      setShowScore(true);
    }
  }
  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  
  };
  
  return (
    <>
    <div className="App">
      <h1 className='Quiztitle'>REACT QUIZ APP</h1>
      <h2 className='currentScore'>Current Score: {score}</h2>
    {showScore ?(
      <div className='Results'>
        <div className='quizComplete'> 
          <Typewriter
             onInit={(typewriter) =>
             typewriter.typeString('QIUZ COMPLETE')
             .start()
            }
          /> 
        </div>
        <div className='score-section'>
        <Typewriter
             onInit={(typewriter) =>
             typewriter.typeString(`You Scored:${score}/ ${QuestionList.length}  (${Math.round((score / QuestionList.length)*100)}%)`)
             .changeDelay(2000)
             .start()
            }
          /> 
        </div>
        <button className='restBtn' onClick={()=>resetQuiz()}> Reset</button>
        <h2>You got {wrong} questions wrong</h2>
        <div>
           {QuizSummary()}
        </div>
      </div>
    
    ) : (
     
    <div>
      <div className='question-section'>
      <div className='question-count'>
        Question {currentQuestion + 1} of {QuestionList.length}
        </div>
        <div className='question-text'>
          {QuestionList[currentQuestion].questionText}
        </div>
        {QuestionList[currentQuestion].answerOptions.map((answerOption) => (
          <li className='answerList' key={answerOption.id}>
            <button disabled={clicked} className={`answerButton ${clicked && answerOption.isCorrect ? "correct" :""}`} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          </li>
				))}
      </div>
      <div className='btnNext'>
        <button className='nextButton' onClick={handleNextClicked} disabled={!clicked}> Next</button>
      </div>
      </div>
    )}
    </div>
    </>
  );
}

export default App;
