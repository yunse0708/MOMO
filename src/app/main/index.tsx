import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Movie, TVShow } from "@/types/Movie";
import { useRouter } from "next/navigation";
import {
  fetchMovies,
  fetchTvShows,
  searchMovies,
  searchTvShows,
} from "@/api/api";
import * as S from "./styles.css";
import { Header } from "@/components/Header";
import { Box, ottServices } from "@/components/Box/index";
import Footer from "../../../public/images/Footer.svg";

export const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tvShows, setTvShows] = useState<TVShow[]>([]);
  const [searchResults, setSearchResults] = useState<{
    movies: Movie[];
    tvShows: TVShow[];
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchPosters = async () => {
      try {
        const [topMovies, topTvShows] = await Promise.all([
          fetchMovies(),
          fetchTvShows(),
        ]);
        setMovies(topMovies);
        setTvShows(topTvShows);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchPosters();
  }, []);

  const filterMoviesByGenre = (genre: string) => {
    const genreId = parseInt(genre);
    const filteredMovies = movies.filter((movie) =>
      movie.genre_ids.includes(genreId)
    );
    return filteredMovies;
  };

  const handleSearch = async (query: string) => {
    if (query.trim() === "") return;
    setIsSearching(true);
    try {
      const [movieResults, tvShowResults] = await Promise.all([
        searchMovies(query),
        searchTvShows(query),
      ]);
      setSearchResults({ movies: movieResults, tvShows: tvShowResults }); // 검색 결과 상태 설정
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleMovieClick = (id: number) => {
    router.push(`/detail/${id}?type=movie`);
  };

  const handleTvShowClick = (id: number) => {
    router.push(`/detail/${id}?type=tv`);
  };

  return (
    <div className={S.Layout}>
      <Header onSearch={handleSearch} />

      <div className={S.Layout2}>
        <Box services={ottServices} />
        {isSearching ? (
          <div>검색 중...</div>
        ) : searchResults ? (
          <>
            <div className={S.Title}>검색 결과</div>
            <div className={S.PosterContainer}>
              {searchResults.movies.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => handleMovieClick(movie.id)}
                  style={{ cursor: "pointer", flex: "0 0 auto" }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={S.Poster}
                    width={200}
                    height={300}
                  />
                </div>
              ))}
              {searchResults.tvShows.map((show) => (
                <div
                  key={show.id}
                  onClick={() => handleTvShowClick(show.id)}
                  style={{ cursor: "pointer", flex: "0 0 auto" }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.name}
                    className={S.Poster}
                    width={200}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className={S.Title}>영화</div>
            <div className={S.PosterContainer}>
              {movies.slice(0, 10).map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => handleMovieClick(movie.id)}
                  style={{ cursor: "pointer", flex: "0 0 auto" }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={S.Poster}
                    width={200}
                    height={300}
                  />
                </div>
              ))}
            </div>

            <div className={S.Title}>인기 TV 프로그램</div>
            <div className={S.PosterContainer}>
              {tvShows.slice(0, 10).map((show) => (
                <div
                  key={show.id}
                  onClick={() => handleTvShowClick(show.id)}
                  style={{ cursor: "pointer", flex: "0 0 auto" }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.name}
                    className={S.Poster}
                    width={200}
                    height={300}
                  />
                </div>
              ))}
            </div>

            <div className={S.Title}>코미디 영화</div>
            <div className={S.PosterContainer}>
              {filterMoviesByGenre("35").map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => handleMovieClick(movie.id)}
                  style={{ cursor: "pointer", flex: "0 0 auto" }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={S.Poster}
                    width={200}
                    height={300}
                  />
                </div>
              ))}
            </div>

            <div className={S.Title}>액션 영화</div>
            <div className={S.PosterContainer}>
              {filterMoviesByGenre("28").map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => handleMovieClick(movie.id)}
                  style={{ cursor: "pointer", flex: "0 0 auto" }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={S.Poster}
                    width={200}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
