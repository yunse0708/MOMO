"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import * as S from "./style.css";
import { MovieDetails, CastMember, Movie } from "@/types/Movie";
import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchReviews,
  fetchSimilarMovies,
} from "@/api/api";

interface Review {
  author: string;
  content: string;
  rating: number | null;
  created_at: string;
}

const DetailPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [newReview, setNewReview] = useState<string>("");

  useEffect(() => {
    const loadMovie = async () => {
      if (id) {
        try {
          const data = await fetchMovieDetails(Number(id));
          const credits = await fetchMovieCredits(Number(id));
          console.log("영화 상세 정보:", data);
          console.log("출연진 정보:", credits.cast);
          setMovie({ ...data, cast: credits.cast });

          // 비슷한 영화 데이터 가져오기
          const similar = await fetchSimilarMovies(Number(id));
          setSimilarMovies(similar);
        } catch (error) {
          console.error("영화 데이터를 불러오는 중 오류 발생:", error);
        }
      }
    };

    const loadReviews = async () => {
      if (id) {
        try {
          const data = await fetchReviews(Number(id));
          setReviews(data);
        } catch (error) {
          console.error("리뷰 데이터를 불러오는 중 오류 발생:", error);
        }
      }
    };

    loadMovie();
    loadReviews();
  }, [id]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewReview(event.target.value);
  };

  const handleReviewSubmit = () => {
    if (newReview.trim() === "") return;

    const newReviewData: Review = {
      author: "사용자",
      content: newReview,
      rating: 9.3,
      created_at: new Date().toISOString(),
    };

    setReviews((prevReviews) => [newReviewData, ...prevReviews]);
    setNewReview("");
  };

  const handleSimilarMovieClick = (movieId: number) => {
    router.push(`/detail/${movieId}`);
  };

  if (!movie) {
    return <div></div>;
  }

  return (
    <div className={S.Container}>
      <div
        className={S.Banner}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
        }}
      >
        <div className={S.Overlay}>
          <div className={S.Content}>
            <div className={S.PosterContainer}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={S.Poster}
                width={300}
                height={450}
              />
            </div>
            <div className={S.InfoContainer}>
              <h1 className={S.Title}>
                {movie.title}{" "}
                <span className={S.ReleaseDate}>
                  ({movie.release_date.split("-")[0]})
                </span>
              </h1>
              <p className={S.Rating}>평점: {movie.vote_average} / 10</p>
              <p className={S.Genres}>
                장르: {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className={S.Overview}>{movie.overview}</p>
              <div className={S.CastList}>
                <ul>
                  {(movie.cast || [])
                    .slice(0, 5)
                    .map((actor: CastMember, index) => (
                      <li key={index}>
                        {actor.profile_path ? (
                          <Image
                            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                            alt={actor.name}
                            width={50}
                            height={75}
                          />
                        ) : null}
                        <span>
                          {actor.name} - {actor.character}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
              <div className={S.Buttons}>
                <button className={S.LikeButton} onClick={handleLike}>
                  👍 {likes}
                </button>
                <button className={S.DislikeButton} onClick={handleDislike}>
                  👎 {dislikes}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={S.ReviewSection}>
        <h2 className={S.ReviewTitle}>리뷰</h2>
        <div className={S.ReviewInputContainer}>
          <input
            type="text"
            className={S.ReviewInput}
            placeholder="영화 감상평을 남겨주세요."
            value={newReview}
            onChange={handleReviewChange}
          />
          <button onClick={handleReviewSubmit} className={S.ReviewSubmitButton}>
            ▶︎
          </button>
        </div>
        <div className={S.ReviewList}>
          {reviews.map((review, index) => (
            <div key={index} className={S.ReviewCard}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 비슷한 장르의 영화 목록 추가 */}
      <div className={S.SimilarMoviesSection}>
        <h2 className={S.SimilarMoviesTitle}>비슷한 영화</h2>
        <div className={S.SimilarMoviesList}>
          {similarMovies.map((similarMovie) => (
            <div
              key={similarMovie.id}
              className={S.SimilarMovieCard}
              onClick={() => handleSimilarMovieClick(similarMovie.id)} // 클릭 시 상세정보로 이동
            >
              <Image
                src={`https://image.tmdb.org/t/p/w200${similarMovie.poster_path}`}
                alt={similarMovie.title}
                width={150}
                height={225}
                className={S.SimilarMovieImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
