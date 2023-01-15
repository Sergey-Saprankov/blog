import React from "react";
import s from "./Sort.module.scss";

const Sort = () => {
  return (
    <div className={s.sortBlock}>
      <select className={s.select}>
        <option selected value="">
          New blogs first
        </option>
        <option value="">Old blogs first</option>
        <option value="">From A to Z</option>
        <option value="">From Z to A</option>
      </select>
    </div>
  );
};

export default Sort;
