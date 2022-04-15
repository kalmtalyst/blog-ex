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
  let [clickedTitle, setClickedTitle] = useState(0);

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
      <button onClick={editTitle}>제목 수정</button>
      <section>
        {title.map((title, i) => (
          <div
            className="post-list"
            key={title}
            onClick={(e) => {
              setModal(true);
              setClickedTitle(i);
            }}
          >
            <h3>
              {title}
              <span onClick={addLike}> 👍 </span>
              {likes}
            </h3>
            <p>3월 5일 발행</p>
            <hr />
          </div>
        ))}
      </section>
      {/* <button
        onClick={() => {
          setClickedTitle(0);
        }}
      >
        Button1
      </button>
      <button
        onClick={() => {
          setClickedTitle(1);
        }}
      >
        Button2
      </button>
      <button
        onClick={() => {
          setClickedTitle(2);
        }}
      >
        Button3
      </button> */}
      <button
        onClick={() => {
          setModal(false);
        }}
      >
        닫기
      </button>
      {modal === true ? (
        <Modal title={title} clickedTitle={clickedTitle}></Modal>
      ) : null}
    </div>
  );
}

function Modal({ title, clickedTitle }) {
  return (
    <section className="modal">
      <h2>{title[clickedTitle]}</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </section>
  );
}

export default App;
