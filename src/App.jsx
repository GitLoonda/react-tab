import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [flg, setFlg] = useState(false);
  const [tab, setTab] = useState(0);
  const [tab2, setTab2] = useState(0);

  const onModal = () => {
    setFlg(true);
  };
  const offModal = () => {
    setFlg(false);
  };

  const content = [
    <article id="tab1">
      <h1>Tab1 Content</h1>
      <p>1번 탭 내용</p>
    </article>,
    <article id="tab1">
      <h1>Tab2 Content</h1>
      <p>2번 탭 내용</p>
    </article>,
    <article id="tab1">
      <h1>Tab3 Content</h1>
      <p>3번 탭 내용</p>
    </article>,
  ];

  return (
    <>
      <h1>App</h1>
      <button onClick={onModal}>모달창 생성</button>
      {flg ? <Modal offModal={offModal} /> : null}
      <h2>삼항연산자</h2>
      <div className="tab-ui">
        <div className="tab-group">
          <a style={tab == 0 ? {color:"coral", backgroundColor:"#bbb"} : null} href="javascript:;" onClick={() => setTab(0)}>
            Tab1
          </a>
          <a style={tab == 1 ? {color:"coral", backgroundColor:"#bbb"} : null} href="javascript:;" onClick={() => setTab(1)}>
            Tab2
          </a>
          <a style={tab == 2 ? {color:"coral", backgroundColor:"#bbb"} : null} href="javascript:;" onClick={() => setTab(2)}>
            Tab3
          </a>
        </div>
        <div className="tab-content">
          {tab === 0 ? (
            <article id="tab1">
              <h1>Tab1 Content</h1>
              <p>1번 탭 내용</p>
            </article>
          ) : tab === 1 ? (
            <article id="tab2">
              <h1>Tab2 Content</h1>
              <p>2번 탭 내용</p>
            </article>
          ) : (
            <article id="tab3">
              <h1>Tab3 Content</h1>
              <p>3번 탭 내용</p>
            </article>
          )}
        </div>
      </div>
      <h2>배열로 저장</h2>
      <div className="tab-ui">
        <div className="tab-group">
          <a style={tab2 == 0 ? {color:"coral", backgroundColor:"#bbb"} : null} href="javascript:;" onClick={() => setTab2(0)}>
            Tab1
          </a>
          <a style={tab2 == 1 ? {color:"coral", backgroundColor:"#bbb"} : null} href="javascript:;" onClick={() => setTab2(1)}>
            Tab2
          </a>
          <a style={tab2 == 2 ? {color:"coral", backgroundColor:"#bbb"} : null} href="javascript:;" onClick={() => setTab2(2)}>
            Tab3
          </a>
        </div>
        <div className="tab-content">
          {tab2 === 0 && content[tab2]}
          {tab2 === 1 && content[tab2]}
          {tab2 === 2 && content[tab2]}
        </div>
      </div>
    </>
  );
}

export default App;
