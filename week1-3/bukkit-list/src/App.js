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

function App() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <BukkitList />,
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
                <a style={{textDecoration: "none", color: "#d09913"}}>
                  <h2>🧺 내 버킷리스트 🗒️</h2>
                </a>
                
                {/* 목록 컴포넌트 */}
                <RouterProvider router={router} />
            </div>

            {/* 입력 폼 컴포넌트 */}
            <BukkitForm />
        </div>
    </div>
  );
}

export default App;
