import { style } from "@vanilla-extract/css";

const baseFont =
  "Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

export const Container = style({
  color: "white",
  backgroundColor: "#01050D",
  minHeight: "100vh",
  position: "relative",
  fontFamily: baseFont,
  paddingBottom: "50px", // 하단 여유 공간 추가
});

export const Banner = style({
  width: "100%",
  height: "600px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: baseFont,
});

export const Overlay = style({
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: baseFont,
  zIndex: 1,
});

export const Content = style({
  display: "flex",
  flexDirection: "row",
  gap: "30px",
  alignItems: "flex-start",
  zIndex: 2,
});

export const PosterContainer = style({
  flexShrink: 0,
});

export const Poster = style({
  width: "300px",
  height: "auto",
  borderRadius: "5px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
});

export const InfoContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: "600px",
});

export const Title = style({
  fontSize: "40px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#fff",
  fontFamily: baseFont,
});

export const ReleaseDate = style({
  fontSize: "20px",
  color: "#aaa",
  fontFamily: baseFont,
});

export const Rating = style({
  fontSize: "20px",
  marginBottom: "10px",
  fontFamily: baseFont,
});

export const Genres = style({
  fontSize: "18px",
  marginBottom: "10px",
  fontFamily: baseFont,
});

export const Overview = style({
  fontSize: "18px",
  lineHeight: "1.5",
  marginBottom: "20px",
  fontFamily: baseFont,
});

export const CastList = style({
  fontSize: "18px",
  marginBottom: "20px",
  fontFamily: baseFont,
});

export const Buttons = style({
  display: "flex",
  gap: "15px",
});

export const LikeButton = style({
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#0056b3",
  },
  fontFamily: baseFont,
});

export const DislikeButton = style({
  backgroundColor: "#dc3545",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#c82333",
  },
  fontFamily: baseFont,
});

export const ReviewSection = style({
  padding: "20px",
  backgroundColor: "#1a1a1a",
  zIndex: 0,
  fontFamily: baseFont,
  position: "relative",
  marginTop: "30px",
});

export const ReviewTitle = style({
  fontSize: "24px",
  marginBottom: "10px",
  color: "#fff",
  fontFamily: baseFont,
});

export const ReviewInputContainer = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
});

export const ReviewInput = style({
  flex: 1,
  padding: "10px",
  borderRadius: "25px",
  border: "1px solid #555",
  backgroundColor: "#2c2c2c",
  color: "#fff",
  fontFamily: baseFont,
  fontSize: "16px",
  outline: "none",
  marginRight: "10px",
  "::placeholder": {
    color: "#888",
  },
});

export const ReviewSubmitButton = style({
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
  color: "#888",
  transition: "color 0.3s",
  ":hover": {
    color: "#fff",
  },
});

export const ReviewList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  marginTop: "20px",
});

export const ReviewCard = style({
  backgroundColor: "#2c2c2c",
  padding: "15px",
  borderRadius: "10px",
  width: "220px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  fontFamily: baseFont,
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const SimilarMoviesSection = style({
  marginTop: "30px",
  padding: "20px",

  borderRadius: "10px",
});

export const SimilarMoviesTitle = style({
  fontSize: "24px",
  color: "#fff",
  marginBottom: "10px",
  fontFamily: baseFont,
});

export const SimilarMoviesList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
});

export const SimilarMovieCard = style({
  color: "#fff",
  textAlign: "center",
  transition: "transform 0.2s",
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const SimilarMovieImage = style({
  borderRadius: "5px",
  marginBottom: "5px",
});
