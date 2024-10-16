import { style } from "@vanilla-extract/css";

export const Layout = style({
  display: "flex",
  gap: "40px",
});

export const ImageBox = style({
  background: "linear-gradient(180deg, #2E2F39 0%, #1F1F24 100%)",
  borderRadius: "8px",
  display: "flex",
  width: "256px",
  height: "130px",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px",
});

export const Image = style({
  width: "70%",
  height: "70%",
});

