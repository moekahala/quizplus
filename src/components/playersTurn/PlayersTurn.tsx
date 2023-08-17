import React from 'react';
import styles from './players.module.css';

interface Props {
    currentPlayer: number
}
const PlayersTurn = ({ currentPlayer }: Props) => (
  <section className={styles.playersWrapper}>
    <div className={currentPlayer === 1 ? styles.selectedPlayer : ''}>Player 1</div>
    <div className={currentPlayer === 2 ? styles.selectedPlayer : ''}>Player 2</div>
  </section>
);

export default PlayersTurn;
