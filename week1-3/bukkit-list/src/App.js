import './App.css';

import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BukkitList from './components/BukkitList';
import Detail from './components/Detail';
import BukkitForm from './components/BukkitForm';

const homeStyle = {
  width: "300px",
  minHeight: "400px",
  margin: "auto",
  marginTop: "2rem",
  padding: "2rem",
  border: "2px solid #dddddd",
  borderRadius: "1rem"
}

const data = [
  {
      "id": 1,
      "title": "영화관 가기",
      "detail": "공포 영화 혼자 보기 도전!",
      "done": true,
  },
  {
      "id": 2,
      "title": "책 읽기",
      "detail": "사놓고 안 보고 있는 책이 많다.. 올해에는 꼭 전부 읽기!!",
      "done": false,
  },
  {
      "id": 3,
      "title": "수영 배우기",
      "detail": "물에 뜨는 것부터 시작해야 된다",
      "done": false,
  },
];

function App() {
  const [bukkitData, setBukkitData] = useState(data);
  const router = createBrowserRouter([
    {
        path: "/",
        element: <BukkitList bukkitData={bukkitData} />,
    },
    {
        path: "/detail/:id",
        element: <Detail />,
    },
  ]);

  return (
    <div className="App">
      <div>
            <div style={homeStyle}>
                <a href='/' style={{textDecoration: "none", color: "#d09913"}}>
                  <h2>🧺 내 버킷리스트 🗒️</h2>
                </a>
                
                {/* 목록 컴포넌트 */}
                <RouterProvider router={router} />
            </div>

            {/* 입력 폼 컴포넌트 */}
            <BukkitForm bukkitData={bukkitData} setBukkitData={setBukkitData} />
        </div>
    </div>
  );
}

export default App;
