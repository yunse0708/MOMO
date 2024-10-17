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
import * as S from "./styles.css"; // 스타일 파일 임포트
import { Header } from "@/components/Header";
import { Box, ottServices } from "@/components/Box";
import { Footer } from "@/components/Footer";

export const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tvShows, setTvShows] = useState<TVShow[]>([]);
  const [searchResults, setSearchResults] = useState<{
    movies: Movie[];
    tvShows: TVShow[];
  } | null>(null); // 검색 결과 상태 추가
  const [isSearching, setIsSearching] = useState(false); // 검색 중 여부 상태
  const router = useRouter();

  useEffect(() => {
    const fetchPosters = async () => {
      try {
        const [topMovies, topTvShows] = await Promise.all([
          fetchMovies(),
          fetchTvShows(),
        ]);
        setMovies(topMovies);
        setTvShows(topTvShows); // tvShows 상태도 설정
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchPosters();
  }, []);

  // 장르에 따른 인기 영화 필터링 함수
  const filterMoviesByGenre = (genre: string) => {
    const genreId = parseInt(genre); // 문자열을 숫자로 변환
    const filteredMovies = movies.filter((movie) =>
      movie.genre_ids.includes(genreId)
    ); // genre_ids에 해당 장르가 있는지 확인
    return filteredMovies;
  };

  // 검색 함수
  const handleSearch = async (query: string) => {
    if (query.trim() === "") return; // 빈 검색어는 무시
    setIsSearching(true); // 검색 중 상태 설정
    try {
      const [movieResults, tvShowResults] = await Promise.all([
        searchMovies(query),
        searchTvShows(query),
      ]);
      setSearchResults({ movies: movieResults, tvShows: tvShowResults }); // 검색 결과 상태 설정
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    } finally {
      setIsSearching(false); // 검색 완료 상태로 변경
    }
  };

  const handleMovieClick = (id: number) => {
    router.push(`/detail/${id}?type=movie`); // 상세 페이지로 이동
  };

  const handleTvShowClick = (id: number) => {
    router.push(`/detail/${id}?type=tv`); // 상세 페이지로 이동
  };

  return (
    <div className={S.Layout}>
      <Header onSearch={handleSearch} /> {/* Header에 검색 함수 전달 */}
      <div className={S.Layout2}>
        <Box services={ottServices} />
        {isSearching ? ( // 검색 중일 때 로딩 메시지
          <div>검색 중...</div>
        ) : searchResults ? ( // 검색 결과가 있을 때
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
          // 검색 결과가 없을 때
          <>
            <div className={S.Title}>영화</div> {/* 영화 타이틀 */}
            <div className={S.PosterContainer}>
              <div className={S.GenreTitle}>코미디 영화</div>
              {filterMoviesByGenre("35") // 코미디 장르 ID
                .slice(0, 5)
                .map((movie) => (
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
            {/* TV 프로그램 목록 섹션 추가 */}
            <div className={S.Title}>인기 TV 프로그램</div>
            <div className={S.PosterContainer}>
              {tvShows.slice(0, 5).map((show) => (
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
        )}
      </div>
      <Footer />
    </div>
  );
};
