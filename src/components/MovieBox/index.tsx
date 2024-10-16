import Image from "next/image";
import { FC } from "react";

interface MovieProps {
  movie: {
    title: string;
    poster_path: string;
  };
}

export const MovieBox: FC<MovieProps> = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div>
      <Image
        src={posterUrl}
        alt={`${movie.title} poster`}
        width={500} 
        height={750}
      />
      <h3>{movie.title}</h3>
    </div>
  );
};
