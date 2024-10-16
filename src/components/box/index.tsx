import * as S from "./styles.css";

type Movie = {
  name: string;
  imgSrc: string;
};

// 영화 목록을 정의합니다.
export const movie: Movie[] = [
  { name: "Netflix", imgSrc: "/images/netflix.svg" },
  { name: "Tving", imgSrc: "/images/tving.svg" },
  { name: "Disney+", imgSrc: "/images/disnep.svg" },
  { name: "Coupang", imgSrc: "/images/coupang.svg" },
];

// BoxProps 인터페이스 수정
export interface BoxProps {
  movie: Movie[]; // Movie 객체 배열로 변경
}

// Box 컴포넌트
export const Box = ({ movie }: BoxProps) => {
  return (
    <div className={S.Layout}>
      {movie.map((item) => (
        <div key={item.name} className={S.ImageBox}>
          <img className={S.Image} src={item.imgSrc} alt={item.name} />
        </div>
      ))}
    </div>
  );
};
