import axios from "axios";
import { MovieDetails, TVShowDetails, Movie, TVShow } from "@/types/Movie";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: "ko-KR",
      },
    });

    return response.data.results.map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      genre_ids: movie.genre_ids,
    }));
  } catch (error) {
    console.error("영화 목록 가져오기 실패:", error);
    throw new Error("영화 목록을 불러오지 못했습니다!");
  }
};

export const fetchTvShows = async (): Promise<TVShow[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/popular`, {
      params: {
        api_key: API_KEY,
        language: "ko-KR",
      },
    });

    return response.data.results.map((show: TVShow) => ({
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

export const fetchMovieDetails = async (id: number): Promise<MovieDetails> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: "ko-KR",
      },
    });

    return response.data;
  } catch (error) {
    console.error(`영화 ID ${id}의 상세 정보 가져오기 실패:`, error);
    throw new Error("영화 상세 정보를 불러오지 못했습니다.");
  }
};

export const fetchTvShowDetails = async (
  id: number
): Promise<TVShowDetails> => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${id}`, {
      params: {
        api_key: API_KEY,
        language: "ko-KR",
      },
    });

    return response.data;
  } catch (error) {
    console.error(`TV 프로그램 ID ${id}의 상세 정보 가져오기 실패:`, error);
    throw new Error("TV 프로그램 상세 정보를 불러오지 못했습니다.");
  }
};

export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        language: "ko-KR",
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("영화 검색 중 오류가 발생했습니다.", error);
    throw new Error("영화 검색 중 오류가 발생했습니다.");
  }
};

export const searchTvShows = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/tv`, {
      params: {
        api_key: API_KEY,
        query,
        language: "ko-KR",
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("TV 프로그램 검색 중 오류가 발생했습니다.", error);
    throw new Error("TV 프로그램 검색 중 오류가 발생했습니다.");
  }
};

export const fetchReviews = async (id: number): Promise<Review[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
        language: "ko-KR",
      },
    });

    return response.data.results.map((review: TMDbReview) => ({
      author: review.author,
      content: review.content,
      rating: review.author_details?.rating ?? null,
      created_at: review.created_at,
    }));
  } catch (error) {
    console.error(`영화 ID ${id}의 리뷰 가져오기 실패:`, error);
    throw new Error("리뷰를 불러오지 못했습니다.");
  }
};

export const fetchMovieCredits = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
          language: "ko-KR",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("영화 출연진 정보를 가져오는 중 오류 발생:", error);
    return { cast: [] }; // 기본값 반환
  }
};

export const fetchSimilarMovies = async (id: number): Promise<Movie[]> => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/similar`, {
      params: {
        api_key: API_KEY,
        language: "ko-KR",
      },
    });

    return response.data.results.map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
    }));
  } catch (error) {
    console.error(`비슷한 영화 가져오기 실패:`, error);
    throw new Error("비슷한 영화를 불러오지 못했습니다.");
  }
};

// Review 인터페이스 정의
interface Review {
  author: string;
  content: string;
  rating: number | null;
  created_at: string;
}

// TMDbReview 인터페이스 정의
interface TMDbReview {
  author: string;
  content: string;
  author_details: {
    rating: number | null;
  };
  created_at: string;
}
