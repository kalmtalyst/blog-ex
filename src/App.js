import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "오트라떼 판매 커피집 모음",
    "벚꽃놀이 2022",
    "서울 맛집",
  ]);
  let [likes, setLikes] = useState(0);
  const addLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="App">
      <section className="nav-bar">
        <h1>Blog</h1>
      </section>
      <section>
        <div className="post-list">
          <h3>
            {title[0]}
            <span onClick={addLike}> 👍 </span>
            {likes}
          </h3>
          <p>3월 5일 발행</p>
          <hr />
        </div>
        <div className="post-list">
          <h3>{title[1]}</h3>
          <p>4월 10일 발행</p>
          <hr />
        </div>
        <div className="post-list">
          <h3>{title[2]}</h3>
          <p>4월 11일 발행</p>
          <hr />
        </div>
      </section>
    </div>
  );
}

export default App;
