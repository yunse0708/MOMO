import { style } from "@vanilla-extract/css";

export const Layout = style({
  display: "flex",
  width: "100vw",
  height: "80px",
  backgroundColor: "#000B1F",
  opacity: 0.09,
  position: "fixed",
  alignItems: "center",
  right: "0",
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
