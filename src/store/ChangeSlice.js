import { createSlice } from "@reduxjs/toolkit";

const initialChangeState = { change: true }

const changeSlice = createSlice({
    name: 'change',
    initialState: initialChangeState,
    reducers: {
        home(state, action) {
            state.change = true;
        },
        createBlog(state, action) {
            state.change = false;
        }
    }
})

export const ChnageAction = changeSlice.actions;

export default changeSlice