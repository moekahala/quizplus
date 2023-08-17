import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayersTurn from 'components/playersTurn/PlayersTurn';
import CardsViewer from 'components/cardsViewer/CardsViewer';
import {
  flipCard,
  generateCardsContent,
  generateMoveMessage,
  isCardMatching,
  keepCardsOpened,
  resetFlippedCards,
} from 'utils/gameplay';
import { addMove, determineWinner, clearResults } from 'redux/slices/generalSlice';
import { useAppDispatch } from 'redux/hooks';

const NUMBER_OF_CARDS = 18;

export interface CardContent {
    value: number;
    matchedWithPeerCard: boolean;
    flipped: boolean;
    key: number;
}

const GameplayContainer = () => {
  const [cardsContent, setCardsContent] = useState<CardContent[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [matchedCards, setMatchedCards] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const flippedCards = useRef<number[]>([]);

  useEffect(() => {
    dispatch(clearResults());
    setCardsContent(generateCardsContent(NUMBER_OF_CARDS));
  }, []);

  useEffect(() => {
    if (matchedCards === NUMBER_OF_CARDS) {
      dispatch(determineWinner());
      navigate('/winner');
    }
  }, [matchedCards]);

  const handleClick = (key: number) => {
    // prevent same card click or click on opened card
    if (flippedCards.current.includes(key) || cardsContent[key]?.matchedWithPeerCard) {
      return;
    }

    flippedCards.current.push(key);
    flipCard(key, cardsContent, setCardsContent);

    if (flippedCards.current.length === 2) {
      const success = isCardMatching(flippedCards.current, cardsContent);
      if (success) {
        keepCardsOpened(flippedCards.current, cardsContent, setCardsContent);
        setMatchedCards(matchedCards + 2);
      } else {
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      }

      dispatch(addMove({
        success,
        player: currentPlayer,
        move: generateMoveMessage(flippedCards.current, cardsContent),
      }));

      setTimeout(() => {
        resetFlippedCards(flippedCards.current, cardsContent, setCardsContent);
        flippedCards.current.shift();
        flippedCards.current.shift();
      }, 500);
    }
  };

  return (
    <>
      <PlayersTurn currentPlayer={currentPlayer} />
      <CardsViewer cardsContent={cardsContent} handleClick={handleClick} />
    </>
  );
};

export default GameplayContainer;
