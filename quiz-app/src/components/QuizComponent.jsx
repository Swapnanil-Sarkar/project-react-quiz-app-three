/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const QuizComponent = ({ ques, index, calculateScore, clickNext, clickPrev, clickQuit }) => {
  return (
    <div id="question">
      <div><h2>Question</h2></div>
      <div className='no'>
        <span>{ques + 1} </span>
        of <span>{index ? index.length : 0}</span>
      </div>
      <div className='ques'>{index ? index.question : null}</div>
      <div className="options">
        <div onClick={(e) => calculateScore(e)}>{index ? index.optionA : null}</div>
        <div onClick={(e) => calculateScore(e)}>{index ? index.optionB : null}</div>
        <div onClick={(e) => calculateScore(e)}>{index ? index.optionC : null}</div>
        <div onClick={(e) => calculateScore(e)}>{index ? index.optionD : null}</div>
      </div>
      <div className="buttons">
        <div onClick={clickPrev}>Previous</div>
        <div onClick={clickNext}>Next</div>
        <div onClick={clickQuit}>Quit</div>
      </div>
    </div>
  );
}

QuizComponent.propTypes = {
  ques: PropTypes.number.isRequired,
  index: PropTypes.object,
  calculateScore: PropTypes.func.isRequired,
  clickNext: PropTypes.func.isRequired,
  clickPrev: PropTypes.func.isRequired,
  clickQuit: PropTypes.func.isRequired
};

export default QuizComponent;
