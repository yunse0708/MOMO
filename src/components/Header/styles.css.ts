import { style } from "@vanilla-extract/css";

export const Layout = style({
  display: "flex",
  width: "100vw",
  height: "80px",
  backgroundColor: "rgba(0, 11, 31, 0.09)",
  position: "fixed",
  alignItems: "center",
  top: "0",
  justifyContent: " space-between",
});

export const Title = style({
  fontFamily: "Cherry Bomb One",
  fontSize: "30px",
  color: "white",
  padding: "0 10%",
});

export const Box = style({
  marginRight: "200px",
  display: "flex",
  gap: "64px",
});

export const Btn = style({
  fontFamily: "pretendard-SemiBold",
  fontSize: "20px",
  color: "white",
  justifyContent: "center",
});

export const SearchForm = style({
  display: "flex",
  alignItems: "center",
  paddingRight: "16%",
});

export const SearchInput = style({
  padding: "8px",
  fontSize: "16px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginRight: "10px",
});

export const SearchBtn = style({
  padding: "8px 12px",
  fontSize: "16px",
  color: "white",
  backgroundColor: "rgba(0, 11, 31, 0.5)",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});

export const SearchIcon = style({
  cursor: "pointer",
  marginRight: "10px",
  display: "flex",
  alignItems: "center",
  width: "24px", // 아이콘 크기 조정
  height: "24px", // 아이콘 크기 조정
});

export const SearchIconImg = style({
  width: "100%", // 아이콘 크기 조정
  height: "100%", // 아이콘 크기 조정
});
