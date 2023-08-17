import React from 'react';
import { GameHistory } from 'redux/slices/generalSlice';
import styles from './historyTable.module.css';

interface Props {
    gameHistory: GameHistory[];
}
const HistoryTable = ({ gameHistory }: Props) => {
  return (
    <table className={styles.table}>
      <tr>
        <th>Player Name</th>
        <th>Card Numbers</th>
        <th>Success</th>
      </tr>
      {gameHistory.map((step) => (
        <tr key={step.move}>
          <td>{`Player ${step.player}`}</td>
          <td>{step.move}</td>
          <td>{step.success ? 'True' : 'False'}</td>
        </tr>
      ))}
    </table>
  );
};

export default HistoryTable;
