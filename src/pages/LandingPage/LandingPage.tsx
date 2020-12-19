import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Nav } from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar";
import { LandingMain } from "./LandingMain";
import LandingSearch from "./LandingSearch";
import styles from "./landingPage.module.css";
const queryString = require("query-string");

export const LandingPage: React.FC<RouteComponentProps> = ({ location }) => {
  const query = queryString.parse(location.search);
  return (
    <>
      <Nav showSignin={true} />
      <SearchBar query={query} />
      <div className={styles.body}>
        {Object.keys(query).length === 0 ? (
          <LandingMain />
        ) : (
          <LandingSearch query={query} />
        )}
      </div>
    </>
  );
};
