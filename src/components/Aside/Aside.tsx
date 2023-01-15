import React from "react";
import s from "./Aside.module.scss";
import blogs from "../../assets/aside/blog.svg";
import posts from "../../assets/aside/posts.svg";

const Aside = () => {
  return (
    <aside className={s.aside}>
      <div className={s.wrapper}>
        <ul className={s.nav}>
          <li className={`${s.navItem} ${s.active}`}>
            <div className={s.iconBlock}>
              <img className={s.icon} src={blogs} alt="blogs icon" />
            </div>
            <h2 className={s.title}>Blogs</h2>
          </li>
          <li className={s.navItem}>
            <div className={s.iconBlock}>
              <img className={s.icon} src={posts} alt="posts icon" />
            </div>
            <h2 className={s.title}>Posts</h2>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
