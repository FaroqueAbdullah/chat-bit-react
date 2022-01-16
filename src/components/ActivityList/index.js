import './index.scss';
import { connect } from 'react-redux';


function ActivityList(props) {

    const { userData } = props

    return (
        <div className="activity-list">
            <div className="activity-list-profile">
                <div className="profile-image">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                </div>
                <div className="profile-name">
                    {userData ? userData.name : ''}
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <div className='status-container'>
                        <div className={`active-status active-${userData ? userData.status : ''}`}></div>
                        <div>Web | Repeat Visitor</div>
                    </div>
                </div>
            </div>
            <div className="activity-list-address">
                <div className="icon-address">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <div className="address-details">{userData ? userData.location : ''}</div>
                </div>
                <div className="icon-address">
                    <i className="fa fa-chrome" aria-hidden="true"></i>
                    <div className="address-details">Google, Chrome Windows 10</div>
                </div>
            </div>
            <div className="activity-list-address">
                <div className="icon-address">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <div className="address-details">{userData ? userData.email : ''}</div>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </div>
                <div className="icon-address">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <div className="address-details">{userData ? userData.mobile : ''}</div>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </div>
                <div className="icon-address">
                    <i className="fa fa-sticky-note" aria-hidden="true"></i>
                    <div className="address-details">Add Notes</div>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </div>
            </div>
            <div className="activity-list-others">
                <div className="icon-address">
                    <i className="fa fa-history" aria-hidden="true"></i>
                    <div className="address-details">View Chat History</div>
                </div>
                <div className="icon-address">
                    <i className="fa fa-tag" aria-hidden="true"></i>
                    <div className="address-details">Add Tags</div>
                </div>
                <div className="icon-address">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <div className="address-details">Ban Visitor</div>
                </div>
            </div>
            <div className="counters-container">
                <div className="counter-container">
                    <div>37</div>
                    <div>Total Visits</div>
                </div>
                <div className="counter-container">
                    <div>19</div>
                    <div>Total Chats</div>
                </div>
                <div className="counter-container">
                    <div>05:39:35</div>
                    <div>Chat Duration</div>
                </div>
            </div>
            <div className="activity-list-bottom">
                <div className="icon-address">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                    <div className="address-details">View Chat History</div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentTextWindow : state.currentTextWindow,
        userData : state.connects.find(data => data.id === state.currentTextWindow)
    }
}

export default connect(mapStateToProps)(ActivityList);