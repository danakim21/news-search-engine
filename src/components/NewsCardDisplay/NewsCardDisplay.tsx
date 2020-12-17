import React from 'react';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import styles from './newsCardDisplay.module.css';

interface Props {
  newsArray: News[];
}

export const NewsCardDisplay: React.FC<Props> = ({ newsArray }) => {
  return (
    <div className={styles.cardDisplay}>
      {newsArray.map((news: News, i: number) => (
        <NewsCard
          key={`${news.source}-${news.title}-${news.publishedAt}-${i}`}
          title={news.title}
          content={news.content}
          description={news.description}
          urlToImage={news.urlToImage}
          author={news.author}
          publishedAt={news.publishedAt}
          source={news.source}
          url={news.url}
        />
      ))}
    </div>
  );
};
