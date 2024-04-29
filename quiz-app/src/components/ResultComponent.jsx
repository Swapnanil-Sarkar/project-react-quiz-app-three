/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ResultComponent = ({ score, attempt }) => {
  return (
    <>
      <h3>Result</h3>
      <div id='question'>
        <div><h2>You need more practice!</h2></div>
        <div className='ques' style={{ color: "blue" }}>Your score is {score}</div>
        <div className="list">
          <div id='one'>
            <div>Total number of questions</div>
            <div>Number of attempted questions</div>
            <div>Number of correct answers</div>
            <div>Number of wrong answers</div>
          </div>
          <div id='two'>
            <div>15</div>
            <div>{attempt}</div>
            <div>{score}</div>
            <div>{attempt - score}</div>
          </div>
        </div>
      </div>
      <div className="buttons" style={{ marginTop: "-20vh", marginBottom: "10vh" }}>
        <Link to="/quiz">
          <div>Play Again</div>
        </Link>
        <Link to="/">
          <div>Back to home</div>
        </Link>
      </div>
    </>
  );
}

ResultComponent.propTypes = {
  score: PropTypes.number.isRequired,
  attempt: PropTypes.number.isRequired
};

export default ResultComponent;
