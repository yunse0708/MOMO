// src/app/main/styles.css.ts
import { style } from "@vanilla-extract/css";

export const Layout = style({
  width: "100vw",
  backgroundColor: "#01050D",
});

export const BackgroundImg = style({
  display: "block",
  width: "100vw",
  height: "auto",
  objectFit: "cover",
  top: "0",
  left: "0",
});

export const Layout2 = style({
  display: "flex",
  flexDirection: "column",
  right: "0",
  width: "100vw",
  height: "100vh",
  padding: "0 10%",
});

export const Title = style({
  fontFamily: "pretendard-SemiBold",
  fontSize: "24px",
  color: "white",
  marginTop: "50px",
});

export const PosterContainer = style({
  display: "flex",
  flexDirection: "row",
  overflowX: "scroll", // 가로 스크롤 활성화
  overflowY: "hidden", // 세로 스크롤 제거
  padding: "10px 0",
  gap: "10px",
  width: "100%",
  height: "auto",
  scrollbarWidth: "none", // 스크롤바 숨기기
  msOverflowStyle: "none", // IE에서 스크롤바 숨기기
  "::-webkit-scrollbar": {
    display: "none", // 크롬 등에서 스크롤바 숨기기
  },
});

export const Poster = style({
  margin: "10px",
  borderRadius: "8px",
});


export const GenreTitle = style({
  fontSize: "24px",
  fontWeight: "bold",
  margin: "16px 0",
});