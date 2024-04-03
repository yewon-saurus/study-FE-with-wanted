import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// 고양이
// 강아지
// 홈

const Cat = (props) => {
    const myCatData = useSelector((state) => state);
    // 어디까지 가져올거니?.. state 다 가져오세요. 라고 한 셈
    // const myCatData = useSelector((state) => state.cat.cat_arr);

    return (
        <div>
            <h1>App이 줬어요: {props.a}</h1>
            <h1>고양이</h1>
            <div>
                {
                    myCatData.cat.cat_arr.map((ele, idx) => 
                        <div key={idx}>
                            {ele}
                        </div>
                    )
                }
            </div>
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