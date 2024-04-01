import { createSlice } from "@reduxjs/toolkit"; // 액션 생성 함수, 리듀서를 합친 애

// cat 이라는 모듈을 만들고, 거기에다가 값은 이거야! 이거는 이렇게 바꾸고 싶어

// 값은 이거야!
const initialState = {
    cat_arr: [],
};

// 값이 있으면, 이 값을 바꿀 수 있는 무언가도 있어야 한다

// action을 만들어야 해

// action을 만들 때에는 두 개가 필요한데
// action type: 이게 뭔지 알려주는 것
// 이 액션이 일어나면 값이 어떻게 바뀌어야 하는 지

export const getCatArr = (cat) => {
    return {
        type: "GET", cat
    };
};

export const addCat = (cat) => {
    return {
        type: "ADD",
        cat,
    };
};

export default function reducer(state=initialState, action={}) {
    // 어떤 일이 일어나는 지, 각각 알려줘야 함
    switch (action.type) {
        case "GET": {
            return state
        }
        case "ADD": {
            console.log(state);
            console.log(action);
            return {...state, cat_arr: [...state.cat_arr, action.cat]};
        }
        default:
            return state;
    }
}