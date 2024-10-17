// src/app/detail/[id]/index.tsx
"use client";

import React, { useEffect, useState } from "react";
import { fetchMovieDetails, fetchTvShowDetails } from "@/api/api"; // API 함수 임포트
import * as S from "./style.css"; // 스타일 파일 임포트
import { MovieDetails, TVShowDetails } from "@/types/Movie"; // 타입 임포트
import { useSearchParams } from "next/navigation";

function isMovieDetails(
  details: MovieDetails | TVShowDetails
): details is MovieDetails {
  return (details as MovieDetails).release_date !== undefined;
}

export default function DetailPage({ params }: { params: { id: string } }) {
  const [details, setDetails] = useState<MovieDetails | TVShowDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    if (params.id && type) {
      const fetchDetails = async () => {
        try {
          let data: MovieDetails | TVShowDetails | null = null;

          if (type === "movie") {
            data = await fetchMovieDetails(Number(params.id));
            console.log("영화 상세 정보:", data); // 로그 추가
          } else if (type === "tv") {
            data = await fetchTvShowDetails(Number(params.id));
            console.log("TV 프로그램 상세 정보:", data); // 로그 추가
          }

          setDetails(data);
        } catch (err) {
          console.error("상세 정보를 가져오는 중 오류 발생:", err);
          setError("상세 정보를 가져오는 중 오류가 발생했습니다.");
        } finally {
          setIsLoading(false);
        }
      };

      fetchDetails();
    }
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류 발생: {error}</div>; // 구체적인 오류 메시지 표시
  }

  return (
    <div className={S.Container}>
      {details && (
        <>
          <h1 className={S.Title}>
            {isMovieDetails(details) ? details.title : details.name}
          </h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={isMovieDetails(details) ? details.title : details.name}
            className={S.Poster}
          />
          <p className={S.Overview}>{details.overview}</p>
          <p className={S.Rating}>평점: {details.vote_average}</p>
          <p className={S.ReleaseDate}>
            출시일:{" "}
            {isMovieDetails(details)
              ? details.release_date
              : details.first_air_date}
          </p>
        </>
      )}
    </div>
  );
}
