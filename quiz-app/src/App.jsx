/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ResultComponent from "./components/ResultComponent";
import Data from "./resources/Questions.json";

function App() {
  const [ques, setQues] = useState(0);
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);

  const calculateScore = (e) => {
    const selectedOption = e.target.innerHTML;
    const correctAnswer = Data[ques].answer;
    if (selectedOption === correctAnswer) {
      alert("Correct answer");
      setScore(score + 1);
    } else {
      alert("Wrong answer");
    }
    setAttempt(attempt + 1);
  };

  const clickNext = () => {
    if (ques < Data.length - 1) {
      setQues(ques + 1);
    } else {
      return <Navigate to="/result" />;
    }
  };

  const clickPrev = () => {
    if (ques > 0) {
      setQues(ques - 1);
    }
  };

  const clickQuit = () => {
    if (window.confirm("Are you sure that you want to quit?")) {
      return <Navigate to="/result" />;
    }
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route 
            path='/quiz' 
            element={<QuizComponent 
                        ques={ques} 
                        index={Data[ques]} 
                        calculateScore={calculateScore} 
                        clickNext={clickNext} 
                        clickPrev={clickPrev} 
                        clickQuit={clickQuit} 
                    />} 
          />
          <Route 
            path='/result' 
            element={<ResultComponent score={score} attempt={attempt} />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
