import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GameplayContainer from 'containers/gameplayContainer/GameplayContainer';
import WinnerContainer from 'containers/winnerContainer/WinnerContainer';

function MainContainer() {
  return (
    <Routes>
      <Route path="/" element={<GameplayContainer />} />
      <Route path="/winner" element={<WinnerContainer />} />
    </Routes>
  );
}

export default MainContainer;
