import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addCat } from './redux/modules/cat';
import { addDog } from './redux/slices/dog';

// 고양이
// 강아지
// 홈

const Cat = (props) => {
    const myCatData = useSelector((state) => state);
    // 어디까지 가져올거니?.. state 다 가져오세요. 라고 한 셈
    // const myCatData = useSelector((state) => state.cat.cat_arr);

    return (
        <div>
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
    const myDogData = useSelector((state) => state.dog.dog_arr);

    return (
        <div>
            <h1>강아지</h1>
            <div>
                {
                    myDogData.map((ele, idx) => 
                        <div key={idx}>
                            {ele}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

const Home = (props) => {
    const dispatch = useDispatch(addCat);

    return (
        <div>
            <h1>홈</h1>
            <button onClick={() => {
                dispatch(
                    // {
                    //     type: "cat/ADD", cat: "야옹이"
                    // }
                    addCat("야옹이")
                )
            }}>야옹이</button>
        </div>
    );
}

export { Cat, Dog, Home };