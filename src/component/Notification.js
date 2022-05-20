import classes from './Notification.module.css';
import { useEffect, useState } from 'react';

const Notification = (props) => {

    const [time, setTime] = useState()
    let specialClasses = '';

    useEffect(() => {
        setTime(true)
    },[props.status])

    if (props.status === 'error') {
        specialClasses = classes.error;
    }
    if (props.status === 'success') {
        specialClasses = classes.success;
    }
    const cssClasses = `${classes.notification} ${specialClasses}`;

    setTimeout(() => {
        setTime(false)
    }, 1000);

    return (
        <>
            {time && <section className={cssClasses}>
                <h2>{props.title}</h2>
                <p>{props.message}</p>
            </section>}
        </>
    );
};

export default Notification;