import React from 'react';
import { CardContent } from 'containers/gameplayContainer/GameplayContainer';
import styles from './card.module.css';

interface Props {
    content: CardContent;
    handleClick: (key: number) => void;
}
const Card = (props: Props) => (
  <button
    onClick={() => props.handleClick(props.content?.key)}
    key={props.content?.key}
    className={styles.card}
    type="button"
  >
    {(props.content.flipped || props.content.matchedWithPeerCard) && props.content?.value}
  </button>
);

export default Card;
