import { useReadContext } from '../hooks/useReadContext';

const NotifHeader = ({readCount,setReadCount}) => {

    const { isRead,setIsRead } = useReadContext();

    const markAsRead = () => {
        setIsRead(isRead);
        setReadCount(0);
    }

    return (
        <header className="head">
            <div className="head__info">
                <h1 className="head__title">Notifications</h1>
                <span className="head__number">{readCount}</span>
            </div>
            <button onClick={markAsRead} className="head__button">Mark all as read</button>
        </header>
    )
}

export default NotifHeader;