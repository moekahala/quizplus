import React from 'react';
import Card from 'components/common/card/Card';
import { CardContent } from 'containers/gameplayContainer/GameplayContainer';
import styles from './cardsViewer.module.css';

interface Props {
  cardsContent: CardContent[];
  handleClick: (key: number) => void;
}
const CardsViewer = (props: Props) => (
  <section className={styles.viewer}>
    {props.cardsContent.map((content: CardContent) => (
      <Card content={content} key={content.key} handleClick={props.handleClick} />
    ))}
  </section>
);

export default CardsViewer;
