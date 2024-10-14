import Link from "next/link";
import * as S from "./styles.css";

export const Header = () => {
  return (
    <div className={S.Layout}>
      <div className={S.Title}>MOMO</div>
      <div className={S.Box}>
        <Link href="/home">
          <span className={S.Btn}>홈</span>
        </Link>
        <Link href="/OTT">
          <span className={S.Btn}>OTT</span>
        </Link>
        <Link href="/movie">
          <span className={S.Btn}>영화</span>
        </Link>
        <Link href="/series">
          <span className={S.Btn}>시리즈</span>
        </Link>
      </div>
    </div>
  );
};
