import { createSlice } from "@reduxjs/toolkit";

const initialNotificationStatue = {
    notification: {
        status: '',
        title: '',
        message: ''
    }
}

const NotificationSlice = createSlice({
    name: 'notification',
    initialState: initialNotificationStatue,
    reducers: {
        show(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const NotificationAction = NotificationSlice.actions;

export default NotificationSlice