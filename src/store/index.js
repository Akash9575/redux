import { configureStore } from "@reduxjs/toolkit";
import AllBlogSlice from "./BlogSlice";
import changeSlice from "./ChangeSlice";
import NotificationSlice from "./NotificationSlice";

const store = configureStore({
    reducer: {
        blog: AllBlogSlice.reducer,
        navigation: changeSlice.reducer,
        ui: NotificationSlice.reducer
    }
})

export default store