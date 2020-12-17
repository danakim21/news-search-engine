import React from 'react';
import { Card } from 'antd';
import styles from './newsCard.module.css';
import notFoundImage from '../../assets/not-found.png';

export const NewsCard: React.FC<News> = ({
  title,
  content,
  description,
  urlToImage,
  author,
  publishedAt,
  source,
  url,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          urlToImage ? (
            <img alt={title} src={urlToImage} className={styles.cardImage} />
          ) : (
            <img alt={title} src={notFoundImage} className={styles.cardImage} />
          )
        }
      >
        <p className={styles.details}>
          [{publishedAt.slice(0, 10)}] {author ? author : 'Author unknown'},{' '}
          {source.name}
        </p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>
          {description
            ? description.length < 140
              ? description
              : description.slice(0, 140) + '...'
            : content
            ? content.length < 140
              ? content
              : content.slice(0, 140) + '...'
            : null}
        </p>
      </Card>
    </a>
  );
};
