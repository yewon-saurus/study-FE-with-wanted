// 여기에 cat 모듈을 작성할 건데요!
// 여기에 넣고 싶은 내용이 뭐냐면..

const initialState = {
    cat_arr: ["펄이", "루비"],
};

// 값을 만들어 주긴 했는데, 이제 뭐 할까?
// 얘들 바꿀 수 있게 해줘야 한다.. 바꿀 '행위'를 적어줘야 한다.
// 즉, 값을 바꾸는 '함수'를 적어줘야 한다는 것

// 여기서 redux 특이 나타남
// redux는 '모든 행위'에 이름을 붙이는 걸 좋아해요
// 뭔가 바꾸는 행위 그 자체에 이름을 붙여줘야 해요
// 그걸 action이라고 함

const ADD = "cat/ADD"; // 이름이 cat/ADD인 액션 'ADD'
// cat/ADD를 부르면, cat_arr에 "고양이"를 넣어주는 짓을 하게 하고 싶어요

const addCat = () => {
    // 액션과 행위를 매치시켜주는 '액션 생성 함수'
    return {
        type: ADD,
        cat: "고양이", // cat_arr에다가 추가할 값
    };
}

// 여기까지가, 뭘 할 때 뭐를 해~ 하고 정해준 것

// 이 처리는 리듀서 안에서 일어나야 해
// 리듀서가 '처리기' 인거니까..

export default function (state=initialState, action) {
    // 액션을 보고.. 액션 안에 타입 있는거 봤잖아요
    // 우리(개발자)가 정한 액션 이름이 있었잖아요
    // 어떤 행동을 할 지 정해줘야 해
    // 조건대로 행동하라고 시키는 것
    switch (action.type) {
        case "cat/ADD": {
            return {
                cat_arr: [...state.cat_arr, action.cat],
            };
        }
        default: {
            return state
        }
    }
}