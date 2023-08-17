import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import HistoryTable from 'components/historyTable/HistoryTable';
import styles from './winnerContainer.module.css';

const WinnerContainer = () => {
  const gameState = useAppSelector((state) => state.general);
  const navigate = useNavigate();

  if (gameState.history.length === 0) {
    navigate('/');
  }

  return (
    <section className={styles.winnerStateWrapper}>
      <h2>{`Winner is Player ${gameState.winner}`}</h2>
      <p>Number of correct cards</p>
      <div className={styles.correctCards}>
        {Math.max(gameState.playersScore[0], gameState.playersScore[1])}
      </div>
      <button className={styles.button} type="button" onClick={() => navigate('/')}>
        PLAY AGAIN
      </button>
      <HistoryTable gameHistory={gameState.history} />
    </section>
  );
};

export default WinnerContainer;
