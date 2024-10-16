// src/styles.css
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
  overflowX: "auto", // 가로 스크롤만 허용
  overflowY: "hidden", // 세로 스크롤 제거
  padding: "10px 0",
  gap: "10px",
  width: "100%", // 부모 너비에 맞추기
  height: "auto", // 컨텐츠 높이에 맞추기
});

export const Poster = style({
  flexShrink: 0, // 아이템이 축소되지 않도록 설정
  width: "250px", // 원하는 고정 너비 설정
  height: "auto", // 높이는 자동으로 조정
  margin: "10px",
});
