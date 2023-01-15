import React from "react";
import s from "./Search.module.scss";
import search from "../../assets/blogs/search.svg";

const Search = () => {
  return (
    <div className={s.searchBlock}>
      <img className={s.searchIcon} src={search} alt="search icon" />
      <input className={s.searchInput} type="search" placeholder={"Search"} />
    </div>
  );
};

export default Search;
