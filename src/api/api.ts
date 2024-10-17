// src/api/api.ts
import { MovieDetails, TVShowDetails, Movie, TVShow } from "@/types/Movie";

const API_KEY = "7004906c5315ea62d60e7b3c899122a9";
const BASE_URL = "https://api.themoviedb.org/3";

// 영화 목록 가져오기
export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`
    );

    if (!response.ok) {
      throw new Error("영화 목록을 가져오는 데 실패했습니다.");
    }

    const data = await response.json();
    return data.results.map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      genre_ids: movie.genre_ids,
    }));
  } catch (error) {
    console.error("영화 목록 가져오기 실패:", error);
    throw new Error("영화 목록을 불러오지 못했습니다.");
  }
};

// TV 프로그램 목록 가져오기
export const fetchTvShows = async (): Promise<TVShow[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ko-KR`
    );

    if (!response.ok) {
      throw new Error("TV 프로그램 목록을 가져오는 데 실패했습니다.");
    }

    const data = await response.json();
    return data.results.map((show: TVShow) => ({
      id: show.id,
      name: show.name,
      poster_path: show.poster_path,
      genre_ids: show.genre_ids,
    }));
  } catch (error) {
    console.error("TV 프로그램 목록 가져오기 실패:", error);
    throw new Error("TV 프로그램 목록을 불러오지 못했습니다.");
  }
};

// 영화 상세 정보 가져오기
export const fetchMovieDetails = async (id: number): Promise<MovieDetails> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`
    );

    if (!response.ok) {
      throw new Error("영화 상세 정보를 가져오는 데 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error(`영화 ID ${id}의 상세 정보 가져오기 실패:`, error);
    throw new Error("영화 상세 정보를 불러오지 못했습니다.");
  }
};

// TV 프로그램 상세 정보 가져오기
export const fetchTvShowDetails = async (
  id: number
): Promise<TVShowDetails> => {
  try {
    const response = await fetch(
      `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=ko-KR`
    );

    if (!response.ok) {
      throw new Error("TV 프로그램 상세 정보를 가져오는 데 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error(`TV 프로그램 ID ${id}의 상세 정보 가져오기 실패:`, error);
    throw new Error("TV 프로그램 상세 정보를 불러오지 못했습니다.");
  }
};

// 영화 검색
export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`
  );
  if (!response.ok) {
    throw new Error("영화 검색 중 오류가 발생했습니다.");
  }
  const data = await response.json();
  return data.results; // 검색 결과를 반환
};

// TV 프로그램 검색
export const searchTvShows = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}&language=ko-KR`
  );
  if (!response.ok) {
    throw new Error("TV 프로그램 검색 중 오류가 발생했습니다.");
  }
  const data = await response.json();
  return data.results; // 검색 결과를 반환
};
