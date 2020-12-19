import React, { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { NewsCardDisplay } from "../../components/NewsCardDisplay/NewsCardDisplay";
import { Loading } from "../../components/Loading/Loading";
import PaginationDisplay from "../../components/PaginationDisplay/PaginationDisplay";
import { API_KEY } from "../../constants";
import axios from "axios";
import styles from "./landingSearch.module.css";

interface Props {
  query: {
    searchWord: string;
    sortBy: string;
    page: string;
  };
}

interface PathParamProps {
  id: string;
}

const LandingSearch: React.FC<Props & RouteComponentProps<PathParamProps>> = ({
  query,
  history,
}) => {
  const [newsArray, setNewsArray] = useState<News[]>();
  const [resultCount, setResultCount] = useState<number>();

  const { searchWord, sortBy, page } = query;

  useEffect(() => {
    if (parseInt(page) > 5) {
      history.push({
        pathname: "/",
        search: `?searchWord=${searchWord}&sortBy=${sortBy}&page=5`,
      });
      return;
    }
    axios
      .get(
        `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${searchWord}&sortBy=${sortBy}&page=${page}`
      )
      .then((response) => {
        setNewsArray(response.data.articles);
        setResultCount(
          response.data.totalResults > 100 ? 100 : response.data.totalResults
        );
      })
      .catch((err) => console.log(err));
  }, [query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <div className={styles.displaySearch}>
        <p className={styles.displaySearchText}>
          {resultCount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} search
          results for:{" "}
        </p>
        <h2 className={styles.displaySearchWord}>{searchWord}</h2>
      </div>
      {!newsArray ? <Loading /> : <NewsCardDisplay newsArray={newsArray} />}
      {resultCount ? (
        <PaginationDisplay query={query} resultCount={resultCount} />
      ) : null}
    </>
  );
};

export default withRouter(LandingSearch);
