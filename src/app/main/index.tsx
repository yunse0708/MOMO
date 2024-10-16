import * as S from "./styles.css";
import { Header } from "@/components/Header";
import Image from "next/image";
import Background from "../../../public/images/Background.svg";
import { Box, movie } from "@/components/box/index";
import React, { useEffect, useState } from "react";
import { Movie, TVShow } from "@/types/Movie";

export const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tvShows, setTvShows] = useState<TVShow[]>([]);

  useEffect(() => {
    const fetchPosters = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=7004906c5315ea62d60e7b3c899122a9&language=ko-KR&page=1`
        );
        const movieData = await movieResponse.json();
        const topMovies = movieData.results.slice(0, 10);
        setMovies(topMovies);

        const tvResponse = await fetch(
          "https://api.themoviedb.org/3/discover/tv?api_key=7004906c5315ea62d60e7b3c899122a9&language=ko-KR&origin_country=KR&page=1"
        );
        const tvData = await tvResponse.json();
        const topTvShows = tvData.results.slice(0, 10);
        setTvShows(topTvShows);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchPosters();
  }, []);

  return (
    <div className={S.Layout}>
      <Image className={S.BackgroundImg} src={Background} alt="메인 배경" />
      <Header />
      <div className={S.Layout2}>
        <Box movie={movie} />

        <div className={S.Title}>인기 영화 TOP 10</div>

        <div className={S.PosterContainer}>
          {movies.map((movie, index) => (
            <Image
              key={index}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={250}
              height={324}
              className={S.Poster} // 크기는 CSS에서 관리
            />
          ))}
        </div>

        <div className={S.Title}>인기 TV 프로그램 TOP 10</div>
        <div className={S.PosterContainer}>
          {tvShows.map((show, index) => (
            <Image
              key={index}
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
              width={250}
              height={324}
              className={S.Poster} // 크기는 CSS에서 관리
            />
          ))}
        </div>
      </div>
    </div>
  );
};
