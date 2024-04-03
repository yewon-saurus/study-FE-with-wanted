import React from 'react';

// 고양이
// 강아지
// 홈

const Cat = (props) => {
    return (
        <div>
            <h1>App이 줬어요: {props.a}</h1>
            <h1>고양이</h1>
        </div>
    );
}

const Dog = () => {
    return (
        <div>
            <h1>강아지</h1>
        </div>
    );
}

const Home = (props) => {
    return (
        <div>
            <h1>홈</h1>
            <button onClick={() => {
                props.setA(props.a + 1)
            }}>바뀌어라!!</button>
        </div>
    );
}

export { Cat, Dog, Home };