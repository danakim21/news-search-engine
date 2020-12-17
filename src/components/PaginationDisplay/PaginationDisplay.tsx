import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Pagination } from 'antd';
import styles from './paginationDisplay.module.css';

interface Props {
  query: {
    searchWord: string;
    sortBy: string;
    page: string;
  };
  resultCount: number;
}

interface PathParamProps {
  id: string;
}

const PaginationDisplay: React.FC<
  Props & RouteComponentProps<PathParamProps>
> = ({ query, resultCount, history }) => {
  const { searchWord, sortBy, page } = query;
  // Page Num max = 5
  // If total count > 100, pageNum = 5
  // Else pageNum = total count / 20
  const pageNum = resultCount / 20 > 5 ? 5 : resultCount / 20;

  const handleChange = (value: number) => {
    history.push({
      pathname: '/',
      search: `?searchWord=${searchWord}&sortBy=${sortBy}&page=${value}`,
    });
  };

  return (
    <div className={styles.paginationContainer}>
      <Pagination
        simple
        current={parseInt(page)}
        onChange={handleChange}
        total={10 * pageNum}
        className={styles.pagination}
      />
    </div>
  );
};

export default withRouter(PaginationDisplay);
