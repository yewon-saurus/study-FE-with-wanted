import { createSlice } from '@reduxjs/toolkit';

const catSlice = createSlice({
    name: "cat",
    initialState: {cat_arr: ["고냥이", "고양니"]},
    reducers: {
        addCat: (state, action) => {
            state.cat_arr.push(action.payload);
        }
    }
});

export const { addCat } = catSlice.actions;
export default catSlice.reducer;