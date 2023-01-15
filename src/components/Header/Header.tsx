import React from "react";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Blogger Platform</h1>
      </div>
    </header>
  );
};

export default Header;
