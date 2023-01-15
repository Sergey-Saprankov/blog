import React from "react";
import s from "./Blogs.module.scss";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import Blog from "../Blog/Blog";

const Blogs = () => {
  return (
    <section className={s.containerBlogs}>
      <div className={s.wrapper}>
        <h2 className={s.blogsTitle}>Blogs</h2>

        <div className={s.searchSortBlock}>
          <Search />
          <Sort />
        </div>

        <div className={s.blogContainer}>
          <Blog />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
