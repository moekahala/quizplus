import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GameplayContainer from 'components/containers/gameplayContainer/GameplayContainer';

function MainContainer() {
  return (
    <Routes>
      <Route path="/" element={<GameplayContainer />} />
    </Routes>
  );
}

export default MainContainer;
