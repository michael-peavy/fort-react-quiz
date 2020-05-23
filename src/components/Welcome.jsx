import React from 'react'

export default function Welcome(props){

    const startQuiz = () => {
        props.startQuiz(false)
    }

    return(
        <div className=' center question-box' style={{textAlign:'center'}}>
            <div className='font' style={{marginBottom:'20px', fontSize:'25px'}}>How well do you know fortnite?</div>
            <button className='font, center' onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}