import React from 'react';
import PlayersTurn from 'components/playersTurn/PlayersTurn';
import CardsViewer from 'components/cardsViewer/CardsViewer';

const GameplayContainer = () => (
  <>
    <PlayersTurn />
    <CardsViewer />
  </>
);

export default GameplayContainer;
