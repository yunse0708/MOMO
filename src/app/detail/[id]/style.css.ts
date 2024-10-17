// src/app/detail/style.css.ts
import { style } from "@vanilla-extract/css";

export const Container = style({
  padding: "20px",
  color: "white",
  backgroundColor: "#01050D",
  textAlign: "center",
  minHeight: "100vh",
});

export const Title = style({
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "20px",
});

export const Poster = style({
  width: "200px",
  height: "auto",
  marginBottom: "20px",
});

export const Overview = style({
  fontSize: "16px",
  marginBottom: "10px",
});

export const Rating = style({
  fontSize: "14px",
  marginBottom: "10px",
});

export const ReleaseDate = style({
  fontSize: "14px",
});
