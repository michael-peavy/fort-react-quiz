import React, {useState} from 'react';
import "../App.css"

export default function(props){

    const [selectedAnswer, setSelctedAnswer] = useState(null)
    const [answerSubmitted, setAnswerSubmitted] = useState(false)

    const handleSubmit = () => {
        if(selectedAnswer!==null){
            setAnswerSubmitted(true)
            props.submitAnswer(selectedAnswer)
        }else{
            alert('select an answer')
        }
    }

    const goNext = () => {
        setSelctedAnswer(null)
        setAnswerSubmitted(false)
        props.goToNextQuestion()
    }

    return(
      
        <div className='row quiz-item-header'>
            <div className='question-title' style={{ fontSize:'40px', marginTop:'50px', marginBottom:'50px'}}>{props.currentQuestion.question}</div>
            {props.currentQuestion.answers.map((answer, index)=>{
                return selectedAnswer===index? 
                
                <div className='questions' style={{marginLeft:'135px', fontSize:'50px', color:'white'}} onClick={()=>{setSelctedAnswer(index)}} >{answer}</div> : 
                <div className='ques' style={{fontSize:'50px', color:'white'}}onClick={()=>{setSelctedAnswer(index)}}>{answer}</div>
                
            })}
            <div className='center'>
            <button className='font'  disabled={answerSubmitted} onClick={handleSubmit}>Submit</button>
            {answerSubmitted && <button className='button, space font' onClick={goNext}>Next</button>}
            </div>
        </div>   
        
    )
}