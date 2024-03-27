import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  let titleStyle = {
    color: "green",
  };
  let line = {
    background: "green",
    height: "2px",
    border: "0",
  };
  let section = {
    textAlign: "left",
    padding: "30px",
  };

  const [greeting, setGreeting] = useState('안녕하세요!');

  const changeText = () => {
    setGreeting('반가워요!');
    console.log(greeting);
  };

  return (
    <div className="App">
      <div>
        <h1 style={titleStyle}>{greeting}</h1>
      </div>
      <hr style={line}></hr>
      <div style={section}>
        <p>이름을 입력해주세요.</p>
        <input />
        <button type='button' onClick={changeText}>제출</button>
      </div>
    </div>
  );
}

export default App;
