// src/components/Header.tsx
import Link from "next/link";
import { useState } from "react";
import * as S from "./styles.css";

export const Header = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm); // 검색어 전달
  };

  return (
    <div className={S.Layout}>
      <div className={S.Title}>MOMO</div>
      <div className={S.Box}>
        <Link href="/">
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
      <form onSubmit={handleSearchSubmit} className={S.SearchForm}>
        <input
          type="text"
          placeholder="검색"
          value={searchTerm}
          onChange={handleSearchChange}
          className={S.SearchInput}
        />
      </form>
    </div>
  );
};
