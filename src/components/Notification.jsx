import NotifHeader from '../components/NotifHeader';
import notifs from '../../data/notif.json';
import NotifCard from './NotifCard';
import { useState } from 'react';

const Notification = () => {

    const [readCount,setReadCount] = useState(3);

    return (
        <div className="notification">
            <NotifHeader readCount={readCount} setReadCount={setReadCount} />
            <div className="notification__row">
                { notifs?.map(notif => (
                    <NotifCard count={readCount} key={notif.id} notif={notif} />
                )) }
            </div>
        </div>
    )
}

export default Notification;