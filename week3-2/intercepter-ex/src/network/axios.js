// 네트워크 요청을 보내는 axios 객체를 만들건데,
// 네트워크 요청을 보낼 때 해야하는 게 뭐였죠?

// 1. 요청을 만들기
// 2. 요청에 넣을 애들 작성 해주기
// 3. 요청을 보내기
// 4. 요청에 대한 응답을 받아오기
// 5. 후처리까지 하면 끝!

import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001",
    headers: {
        "Content-Type": "application/json",
    },

});

instance.interceptors.request.use((config) => {
    const _conf = {
        ...config,
        headers: {
            ...config.headers,
            "Authorization": "test_token_1234",
        }
    }
   console.log("config 입니다: ", config);
   console.log("잘 바뀌었나요?: ", _conf);
   return config;
});

instance.interceptors.response.use((config) => {
    console.log("response config 입니다: ", config);

    return config;
}, (error) => {
    let my_error = new Error("에러 났대요 ㅠㅠ");

    // return Promise.reject(error);
    return my_error;
});

export default instance;