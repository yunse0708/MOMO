import { style } from "@vanilla-extract/css";

export const Layout = style({
  display: "flex",
  width: "100vw",
  backgroundColor: "rgba(0, 11, 31, 0.09)",
});

export const Foo = style({
  display: "flex",
  width: "100vw",
  objectFit: "cover",
});
