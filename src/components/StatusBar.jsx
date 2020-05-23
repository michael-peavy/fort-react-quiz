import React from 'react';

export default function StatusBar(props){

    return(
        <>
        <div className='row quiz-state js-quiz-state quiz-item-footer col-12' style={{display:'flex', justifyContent:'center'}}>
        <div>{props.status}</div>
        <div className='correct font'  style={{textAlign:'center'}}>Correct Answers: {props.correctCount}</div>
        <div className='incorrect font ' style={{textAlign:'center'}}>Incorrect Answers: {props.incorrectCount}</div>
        </div>
        </>
    )
}