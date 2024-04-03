import { combineReducers } from 'redux';
import { createStore } from 'redux';
import cat from './modules/cat';

// 스토어가 뭐야?
// 전역저장소 인데, 값이랑 그 값을 바꿔주는 애로 구성되어 있어요

// 단, redux에서는 스토어가 무조건 한 개만 존재해야 한다
// 리듀서를 여러 개 만들게 된다면, 그걸 한 개로 묶어주는 과정이 필요해
// 미들웨어도 여러개 쓰고싶다면? 얘도 묶어줘야 한다..

// const rootReducer = combineReducers({
//     묶고싶었던 리듀서들 다 때려넣기
// });

const rootReducer = combineReducers({
    "cat": cat, // cat: 모듈 이름
});

const store = createStore(rootReducer);
// 두 번째 인자 -> 미들웨어: optional, 중간처리 하는 역할

export default store;