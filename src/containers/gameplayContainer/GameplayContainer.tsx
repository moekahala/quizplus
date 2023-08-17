import React, { useEffect, useRef, useState } from 'react';
import PlayersTurn from 'components/playersTurn/PlayersTurn';
import CardsViewer from 'components/cardsViewer/CardsViewer';
import {
  flipCard, generateCardsContent, isCardMatching, keepCardsOpened, resetFlippedCards,
} from 'utils/gameplay';

export interface CardContent {
    value: number;
    matchedWithPeerCard: boolean;
    flipped: boolean;
    key: number;
}

const GameplayContainer = () => {
  const [cardsContent, setCardsContent] = useState<CardContent[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const flippedCards = useRef<number[]>([]);

  const handleClick = (key: number) => {
    // prevent same card click
    if (flippedCards.current.includes(key)) {
      return;
    }

    flippedCards.current.push(key);
    flipCard(key, cardsContent, setCardsContent);

    if (flippedCards.current.length === 2) {
      if (isCardMatching(flippedCards.current, cardsContent)) {
        // ToDo add to history
        keepCardsOpened(flippedCards.current, cardsContent, setCardsContent);
      } else {
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      }

      setTimeout(() => {
        resetFlippedCards(flippedCards.current, cardsContent, setCardsContent);
        flippedCards.current = [];
      }, 1000);
    }
  };

  useEffect(() => {
    setCardsContent(generateCardsContent(18));
  }, []);

  return (
    <>
      <PlayersTurn currentPlayer={currentPlayer} />
      <CardsViewer cardsContent={cardsContent} handleClick={handleClick} />
    </>
  );
};

export default GameplayContainer;
