import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  React.useEffect(() => {
    // const promise1 = new Promise((resolve, reject) => {
    //   resolve("성공했나요?");
    //   reject("실패했나요?");
    // })

    const sleepData = async () => {
      let data = await fetch(
        "http://localhost:5001/sleep_times"
      );

      return data;
    }

    const addSleepData = async (sleepData) => {
      let data = await fetch(
        "http://localhost:5001/sleep_times",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sleepData),
        }
      );

      return data;
    }

    let axiosTest = async () => {
      let data = axios({
        method: "post", // 소문자, 대문자 상관없음
        url: "http://localhost:5001/sleep_times",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          "day": "일요일",
        }
      });

      return data;
    }

    // console.log(axiosTest());
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
