import axios from "axios";

// 네트워크 요청만 하는 함수를 만들어 둘게요
// 실무에서는 class를 이용해서 interface를 사용한다고 하시네요
// JS에서는 그게 그거예요

async function simpleHttpRequest(method="GET", url="/", data={}) {
    let response = null;
    let baseURL = "http://localhost:5001/";
    let requestUrl = baseURL + url;

    axios.create({
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (method == "GET") {
        response = await axios.get(requestUrl);
    }

    return response;
}

export default simpleHttpRequest;