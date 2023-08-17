import React from 'react';
import Card from 'components/common/card/Card';
import styles from './cardsViewer.module.css';

const CardsViewer = () => (
  <section className={styles.viewer}>
    {Array.from(Array(18).keys()).map(() => (
      <Card />
    ))}
  </section>
);

export default CardsViewer;
