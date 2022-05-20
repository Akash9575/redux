import { createSlice } from "@reduxjs/toolkit";

const initialBlogState = {
    items: [],
    changed: false
}

const AllBlogSlice = createSlice({
    name: 'blog',
    initialState: initialBlogState,
    reducers: {
        resetData(state, action) {
            state.items = action.payload.items
        },
        addItem(state, action) {
            state.items.push({
                id: new Date().getTime(),
                title: action.payload.title,
                des: action.payload.des
            })
            state.changed = true;
        },
        removeItem(state, action) {
            state.changed = true;
            const id = action.payload
            state.items = state.items.filter((item) => item.id !== id)
        }
    }
})

export const BlogAction = AllBlogSlice.actions;

export default AllBlogSlice