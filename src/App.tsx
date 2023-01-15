import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="container">
      <Header />
      <div className={"content"}>
        <Aside />
        <Blogs />
      </div>
    </div>
  );
}

export default App;
