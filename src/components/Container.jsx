import React, {useState} from 'react';
import Welcome from './Welcome'
import Question from './Question';
import QuestionsList from '../store';
import StatusBar from './StatusBar'

export default function(props){

    const [inWelcomeStep, setInWelcomeStep] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [correctCount, setCorrectCount] = useState(0)
    const [incorrectCount, setIncorrectCount] = useState(0)
    const [isLastCorrect, setIsLastCorrect] = useState(false)


    const goToNextQuestion = () => {
        let newStep = currentQuestion
        newStep = newStep +1
        setCurrentQuestion(newStep)
    }

    const submitAnswer = (selectedAnwerIndex) => {
        const currQuestion = QuestionsList[currentQuestion]
        const isCorrect = currQuestion.answers[selectedAnwerIndex] === currQuestion.correctAnswer
        setIsLastCorrect(isCorrect)
        if(isCorrect){
            setCorrectCount(correctCount+1)
        }else{
            setIncorrectCount(incorrectCount+1)
        }
    }

    const restart = () => {
        setInWelcomeStep(true)
        setCurrentQuestion(0)
        setCorrectCount(0)
        setIncorrectCount(0)
        setIsLastCorrect(false)
    }

    return(
        <div className='row' style={{width:'100%', height:'100vh' }}>
            <h2 className='font2' style={{textAlign:'center', fontSize:'60px', marginTop:'95px',  marginBottom:'100px'}}>Fortnight quiz</h2>
            {inWelcomeStep && <Welcome startQuiz={setInWelcomeStep} />}
            {(!inWelcomeStep && currentQuestion<5 )&& 
            <>
            <Question
                currentQuestion={QuestionsList[currentQuestion]} 
                goToNextQuestion={goToNextQuestion}
                submitAnswer={submitAnswer}
            />
            <StatusBar
                status={
                    currentQuestion===0 ? null : (isLastCorrect?"" :"")
                }
                correctCount={correctCount}
                incorrectCount={incorrectCount}
            />
            </>
            }
            {
                currentQuestion===5 &&
                <div className=' center question-box' style={{textAlign:'center'}}>
                  <div className='center font' style={{ fontSize:'30px'}}>You got {incorrectCount} out of 5 wrong. </div>

                    <div className='center font' style={{ fontSize:'30px', marginTop:'50px'}}>{correctCount>2?<div> You won </div>:<div>You lost</div>} </div> 
                    <button className='font center' style={{}} onClick={restart}> Restart </button>
                </div>                
            }

        </div>
    )
}