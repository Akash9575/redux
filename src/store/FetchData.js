import { BlogAction } from "./BlogSlice"
import { NotificationAction } from "./NotificationSlice"

export const sendAlldata = (data) => {
    return dispatch => {
        const sendData = async () => {
            dispatch(NotificationAction.show({
                status: "panding",
                title: "panding..",
                message: "data is pending"
            }))
            const response = await fetch('https://newblog-60e2d-default-rtdb.firebaseio.com/blog.json', {
                method: "PUT",
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error("There is an error can not send data")
            }

            dispatch(NotificationAction.show({
                status: 'success',
                title: "success..",
                message: "send successfully "
            }))
        }

        sendData().catch((err) => {
            dispatch(NotificationAction.show({
                status: 'error',
                title: "error..",
                message: "data can not be send "
            }))
        })
    }
}

export const fetchAllData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://newblog-60e2d-default-rtdb.firebaseio.com/blog.json')

            if (!response.ok) {
                throw new Error("There is an error can not Fetch data")
            }
            const responseData = response.json()

            return responseData;
        }

        try {
            const data = await fetchData()
            dispatch(BlogAction.resetData({
                items: data || []
            }))
        }
        catch (err) {
            dispatch(NotificationAction.show({
                status: 'error',
                title: "error..",
                message: "data can not be fetch"
            }))
        }
    }
}