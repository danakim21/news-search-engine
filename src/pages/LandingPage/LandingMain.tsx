import React, { useState, useEffect } from 'react';
import { CarouselNewsCardDisplay } from '../../components/CarouselNewsCardDisplay/CarouselNewsCardDisplay';
import { NewsCardDisplay } from '../../components/NewsCardDisplay/NewsCardDisplay';
import { Loading } from '../../components/Loading/Loading';
import { API_KEY } from '../../constants';
import axios from 'axios';

export const LandingMain: React.FC = () => {
  const [newsArray, setNewsArray] = useState<News[]>();

  useEffect(() => {
    // Fetch Top Headlines from US
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      .then((response) => {
        setNewsArray(response.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {!newsArray ? (
        <Loading />
      ) : (
        <>
          <CarouselNewsCardDisplay newsArray={newsArray.slice(0, 4)} />
          <NewsCardDisplay newsArray={newsArray.slice(4)} />
        </>
      )}
    </>
  );
};
