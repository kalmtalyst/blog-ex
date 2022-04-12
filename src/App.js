import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "오트라떼 판매 커피집 모음",
    "벚꽃놀이 2022",
    "서울 맛집",
  ]);
  let [likes, setLikes] = useState(0);
  let [modal, setModal] = useState(false);
  const addLike = () => {
    setLikes(likes + 1);
  };
  const editTitle = () => {
    let newTitle = [...title];
    newTitle[0] = "팝업스토어 방문기";
    setTitle(newTitle);
  };
  return (
    <div className="App">
      <section className="nav-bar">
        <h1>Blog</h1>
      </section>
      <button onClick={editTitle}>수정</button>
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
          <h3 onClick={() => setModal(true)}>{title[2]}</h3>
          <p>4월 11일 발행</p>
          <hr />
        </div>
      </section>
      {modal === true ? <Modal title={title}></Modal> : null}
    </div>
  );
}

function Modal({ title }) {
  return (
    <section className="modal">
      <h2>{title}</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </section>
  );
}

export default App;
