import React from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [pong, setPong] = React.useState('');

  const handlePing = async () => {
    const res = await axios({
      method: "get",
      url: "http://localhost:5001/ping",
      headers: {
        "Content-Type": "application/json"
      },
    });
    console.log(res);
    if (res.status === 200) setPong(res.data.answer);
  };

  return (
    <div className="App">
      <button onClick={handlePing}>ping</button>
      {pong}
    </div>
  );
}

export default App;