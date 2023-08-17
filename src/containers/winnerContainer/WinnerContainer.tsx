import React from 'react';

import { useAppSelector } from 'redux/hooks';
import HistoryTable from 'components/historyTable/HistoryTable';
import styles from './winnerContainer.module.css';

const WinnerContainer = () => {
  const gameState = useAppSelector((state) => state.general);

  return (
    <section className={styles.winnerStateWrapper}>
      <h2>{`Winner is Player ${gameState.winner}`}</h2>
      <h3>{`Number of correct cards : ${Math.max(gameState.playersScore[0], gameState.playersScore[1])}`}</h3>
      <HistoryTable gameHistory={gameState.history} />
    </section>
  );
};

export default WinnerContainer;
