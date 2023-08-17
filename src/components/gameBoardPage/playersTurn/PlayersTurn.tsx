import React from 'react';
import styles from 'components/gameBoardPage/playersTurn/players.module.css';

interface Props {
    currentPlayer: number
}

const getSelectedStyles = (selected: boolean) => (selected ? styles.selectedPlayer : '');

const PlayersTurn = ({ currentPlayer }: Props) => (
  <section className={styles.playersWrapper}>
    <div className={getSelectedStyles(currentPlayer === 1)}>Player 1</div>
    <div className={getSelectedStyles(currentPlayer === 2)}>Player 2</div>
  </section>
);

export default PlayersTurn;
