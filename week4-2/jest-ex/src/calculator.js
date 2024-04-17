const add = (a, b) => {
    return a + b;
}

// mock api에서 숫자 배열을 가져오는 역할
export const getNumbers = () => {
    const response = fetch("http://localhost:5001/numbers");
    return response;
}

export const addArrayNumbers = (arr) => {
    let sum = 0;
    arr.map((arrItem) => {
        return sum += arrItem;
    });

    return sum;
}

export default add;