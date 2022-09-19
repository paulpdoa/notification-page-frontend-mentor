
const NotifCard = ({notif,count}) => {

    return (
        <div className={`card ${count > 1 && notif.new ? 'card--new' : ''}`}>
            <div className="card__container">
                <div className="card__content">
                    <img className="card__avatar" src={notif.avatar} alt={notif.name} />
                    <div className="card__names--container">
                        <p className="card__notif"><span className="card__name">{notif.name}</span> {notif.action} {notif.notif !== null && <span className={notif.notif !== 'Chess Club' ? 'card__imp' : 'card__chess--club'}>{notif.notif}</span>} {count > 1 && notif.new ? <span className="card__new"></span> : ''}</p>
                        <span className="card__created">{notif.createdAt} ago</span>
                        {notif.content !== null && notif.name === 'Rizky Hasanuddin' ? <p className="card__notif--content">{notif.content}</p> : ''}
                    </div>
                </div>
                { notif.name === 'Kimberly Smith' && <img className="card__notif--image" src={notif.content} alt={notif.name} /> }
            </div>
        </div>
    )
}

export default NotifCard