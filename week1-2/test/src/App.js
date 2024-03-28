import React from 'react';

function App() {
  const [text, setText] = React.useState("Hello, World!");

  return (
    <div>
      <div>{text}</div>
      <button onClick={() => {
        setText("Hello, React!");
      }}>버튼</button>
    </div>
  );
}

export default App;
