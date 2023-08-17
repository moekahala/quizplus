import React from 'react';
import { CardContent } from 'containers/gameBoardContainer/GameBoardContainer';
import styles from 'components/gameBoardPage/card/card.module.css';

interface Props {
    content: CardContent;
    handleClick: (key: number) => void;
}

const Card = ({ content, handleClick }: Props) => (
  <button
    onClick={() => handleClick(content?.key)}
    key={content?.key}
    className={`${styles.card} ${(content?.flipped || content?.matchedWithPeerCard) && styles.flipped}`}
    type="button"
  >
    <div className={styles.content}>
      <div className={styles.front} />
      <div className={styles.back}>
        {content?.value}
      </div>
    </div>
  </button>
);

export default Card;
