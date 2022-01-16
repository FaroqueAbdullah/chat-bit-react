import './index.scss';

function MessageHead(props) {
  return (
    <div className="message-box-head">
      <div className="message-box-head-name">
          <div className="head-tag">Assigned to</div>
          <div className="head-name">{ props.userData.name }</div>
      </div>
      <div className="message-box-head-feature">
        <i className="fa fa-phone" aria-hidden="true"></i>
        <i className="fa fa-video-camera" aria-hidden="true"></i>
        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        <div className='separation-line'></div>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    </div>
  );
}


  
export default MessageHead;
