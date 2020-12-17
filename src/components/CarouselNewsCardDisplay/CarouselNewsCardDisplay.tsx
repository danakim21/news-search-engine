import React from 'react';
import { Carousel } from 'antd';
import styles from './carouselNewsCardDisplay.module.css';
import notFoundImage from '../../assets/not-found.png';

interface Props {
  newsArray: News[];
}

export const CarouselNewsCardDisplay: React.FC<Props> = ({ newsArray }) => {
  return (
    <Carousel autoplay className={styles.carouselContainer}>
      {newsArray.map((news: News) => (
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          key={news.title}
        >
          <p className={styles.text}>{news.title}</p>
          {news.urlToImage ? (
            <img
              src={news.urlToImage}
              className={styles.image}
              alt={news.title}
            />
          ) : (
            <img
              src={notFoundImage}
              className={styles.image}
              alt={news.title}
            />
          )}
        </a>
      ))}
    </Carousel>
  );
};
