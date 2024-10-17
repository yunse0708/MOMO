import Image from "next/image";
import { Movie } from "@/types/Movie";

interface MovieBoxProps {
  movies: Movie[]; // 여러 영화 정보를 받기 위해 movies로 수정
}

export const MovieBox = ({ movies }: MovieBoxProps) => {
  if (!movies || movies.length === 0) {
    return <div>영화 데이터가 없습니다.</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={250}
            height={324}
          />
        </div>
      ))}
    </div>
  );
};
