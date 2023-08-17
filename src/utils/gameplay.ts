import { CardContent } from 'containers/gameplayContainer/GameplayContainer';

function shuffle(array: number[]) {
  let currentIndex = array.length; let
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const generateCardsContent = (numberOfCards: number): CardContent[] => {
  const cardsUniqueNumbers = Array.from(Array(numberOfCards / 2).keys());
  let cardsNumbers = [...cardsUniqueNumbers, ...cardsUniqueNumbers];

  cardsNumbers = shuffle(cardsNumbers);
  const cardsContent: CardContent[] = [];

  let i = 0;
  for (const value of cardsNumbers) {
    cardsContent.push({
      value,
      matchedWithPeerCard: false,
      flipped: false,
      key: i++,
    });
  }

  return cardsContent;
};

export const isCardMatching = (flippedCards: number[], cardsContent: CardContent[]) => {
  return cardsContent[flippedCards[0]].value === cardsContent[flippedCards[1]].value;
};

export const keepCardsOpened = (
  flippedCards: number[],
  cardsContent: CardContent[],
  setCardsContent: (cards: CardContent[]) => void,
) => {
  const updatedCards = [...cardsContent];
  updatedCards[flippedCards[0]].matchedWithPeerCard = true;
  updatedCards[flippedCards[1]].matchedWithPeerCard = true;

  setCardsContent(updatedCards);
};

export const resetFlippedCards = (
  flippedCards: number[],
  cardsContent: CardContent[],
  setCardsContent: (cards: CardContent[]) => void,
) => {
  const updatedCards = [...cardsContent];
  updatedCards[flippedCards[0]].flipped = false;
  updatedCards[flippedCards[1]].flipped = false;

  setCardsContent(updatedCards);
};

export const flipCard = (
  key: number,
  cardsContent: CardContent[],
  setCardsContent: (cards: CardContent[]) => void,
) => {
  const updatedCards = [...cardsContent];
  updatedCards[key].flipped = true;

  setCardsContent(updatedCards);
};

export const generateMoveMessage = (flippedCards: number[], cardsContent: CardContent[]) => {
  const firstCard = cardsContent[flippedCards[0]]?.value;
  const secondCard = cardsContent[flippedCards[1]]?.value;

  return `Opens Card ${firstCard} and ${secondCard}`;
};
