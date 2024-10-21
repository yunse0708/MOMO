// 타입 정의
export interface Genre {
  id: number;
  name: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null; // 출연진 프로필 사진 URL (있을 때만 표시)
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  vote_average?: number; // 평점
  release_date?: string; // 개봉일
}

export interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  genre_ids: number[];
  vote_average?: number; // 평점
  first_air_date?: string; // 첫 방송일
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number; // 평점
  release_date: string; // 개봉일
  genres: Genre[]; // 장르 리스트
  runtime: number; // 영화 상영 시간 (분 단위)
  age_rating: string; // 연령 등급
  cast: CastMember[]; // 출연진 목록
}

export interface TVShowDetails {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  vote_average: number; // 평점
  first_air_date: string; // 첫 방송일
  genres: Genre[]; // 장르 리스트
  episode_run_time: number[]; // 에피소드 런타임 (분 단위 배열)
  age_rating: string; // 연령 등급
  cast: CastMember[]; // 출연진 목록
}
