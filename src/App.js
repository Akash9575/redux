import './App.css';
import CreateBlog from './component/CreateBlog';
import Home from './component/Home';
import NavBar from './component/NavBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendAlldata, fetchAllData } from './store/FetchData';
import Notification from './component/Notification';

let isInitial = true;

function App() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.blog.items)
    const navigate = useSelector(state => state.navigation.change)
    const notification = useSelector(state => state.ui.notification)
    const changed = useSelector(state => state.blog.changed)

    useEffect(() => {
        dispatch(fetchAllData())
    }, [dispatch])

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }
        if (changed) {
            dispatch(sendAlldata(data))
        }
    }, [data, dispatch,changed])

    return (
        <>
            <NavBar />
            {notification.status && <Notification status={notification.status} title={notification.title} message={notification.message} />}
            {navigate ? <Home /> : <CreateBlog />}
        </>
    );
}

export default App;
