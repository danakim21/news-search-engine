import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { message } from 'antd';
import styles from './searchBar.module.css';

enum SearchByCode {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}

interface Props {
  query: {
    searchWord: string | null;
    sortBy: string | null;
  };
}

interface PathParamProps {
  id: string;
}

const SearchBar: React.FC<Props & RouteComponentProps<PathParamProps>> = ({
  query,
  history,
}) => {
  const [searchWord, setSearchWord] = useState(query.searchWord || '');
  const [sortBy, setSortBy] = useState(
    query.sortBy || SearchByCode.publishedAt
  );

  useEffect(() => {
    setSearchWord(query.searchWord || '');
    setSortBy(query.sortBy || SearchByCode.publishedAt);
  }, [query]);

  const handleSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setSortBy(e.currentTarget.value);
  };

  const handleSearchWordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // If searchWord is empty,
    if (!searchWord) {
      message.warning('Please enter a search word');
      return;
    }
    history.push({
      pathname: '/',
      search: `?searchWord=${searchWord}&sortBy=${sortBy}&page=1`,
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.searchForm}>
      <select
        value={sortBy}
        onChange={handleSelectChange}
        className={styles.selectSortBy}
      >
        <option value={SearchByCode.publishedAt}>Published At</option>
        <option value={SearchByCode.relevancy}>Relevancy</option>
        <option value={SearchByCode.popularity}>Popularity</option>
      </select>
      <input
        type="text"
        placeholder="Search for news"
        value={searchWord}
        onChange={handleSearchWordChange}
        className={styles.inputSearchWord}
      />
      <input type="submit" value="Search" className={styles.searchButton} />
    </form>
  );
};

export default withRouter(SearchBar);
