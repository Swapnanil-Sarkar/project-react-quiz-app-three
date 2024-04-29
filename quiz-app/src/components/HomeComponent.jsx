/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const HomeComponent = () => {
  return (
    <div id='home'>
      <h1>QUIZ APP</h1>
      <Link to={"/quiz"}>
        <button id='start'>Play</button>
      </Link>
    </div>
  );
}

export default HomeComponent;
