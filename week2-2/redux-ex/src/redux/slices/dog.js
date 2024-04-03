import { createSlice } from '@reduxjs/toolkit';

const dogSlice = createSlice({
    name: "dog",
    initialState: {dog_arr: ["바둑이", "뽀삐"]},
    reducers: {
        addDog: (state, action) => {
            state.dog_arr.push(action.payload);
            // redux toolkit은.. 개발자들 편하라고 만들어진 툴이에요
            // state.dog_arr = [...state.dog_arr, action.dog_name];
            // cat 때처럼 이렇게 쓰는 거? 귀찮거든요
            // 원본 값 변하지 않게 신경써야 되고.. 그렇잖아요
            // 개발자는 push() 이런식으로 막 쓸 수 있으면 좋겠단 말이에요
            // redux: 아 그래요? 그럼 우리가 immer 제공해줄게요~
        }
    }
});

export const { addDog } = dogSlice.actions;
export default dogSlice.reducer;