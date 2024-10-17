export interface Movie {
  id: number;
  title: string;
  poster_path: string;// src/types/Movie.ts
  genre_ids: number[]; // 장르 ID 배열 추가
  // 다른 필요한 속성들...
}

export interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  genre_ids: number;
}


export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export interface TVShowDetails {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
}
