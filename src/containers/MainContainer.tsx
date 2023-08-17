import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GameBoardContainer from 'containers/gameBoardContainer/GameBoardContainer';
import ResultsContainer from 'containers/resultsContainer/ResultsContainer';

function MainContainer() {
  return (
    <Routes>
      <Route path="/" element={<GameBoardContainer />} />
      <Route path="/results" element={<ResultsContainer />} />
    </Routes>
  );
}

export default MainContainer;
