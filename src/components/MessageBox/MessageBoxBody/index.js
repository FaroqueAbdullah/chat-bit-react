import React, { useState, useRef, useEffect } from 'react';
import Loader from "react-loader-spinner";
import './index.scss';

function MessageBody(props) {
  let previousSender = false;
  const bottomRef = useRef(null);
  const [showChat, setShowChat] = useState(false)

  const { userMsg, showTyping } = props;

  const chatView = userMsg.msg.map( (data, i) => {
    if (i === 0) {previousSender = !data.sender};

    const nextSender = userMsg.msg[i + 1] ? 
                          userMsg.msg[i + 1].sender ===  data.sender ? 
                            '' : data.sender ? 
                              'bottom-right-border' : 'bottom-left-border' 
                                : data.sender ? 
                                  'bottom-right-border' : 'bottom-left-border';

    const lastSender = previousSender === data.sender ? 
                          '' : data.sender ? 'top-right-border' : 'top-left-border';

    previousSender = data.sender;
    
    return (
      <div className={`msg-container ${data.sender ? 'right-msg' :  'left-msg'}`} key={i}>
        <div className={`msg ${data.sender ? 'right-msg-color' :  'left-msg-color'} ${lastSender} ${nextSender}`}>
          {data.text}
        </div>
      </div>
    )
  })


  const chatTyping = 
     (
      <div className="msg-container left-msg" key="typing">
        <div className="msg left-msg-color">
          <Loader
            type="ThreeDots"
            color="gray"
            height={12}
          />
        </div>
      </div>
    )
  

  const executeScroll = () => {
    bottomRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
  };

  useEffect(() => {
    executeScroll()
  })

  useEffect(() => {
    setShowChat(false)
    setTimeout(() => {
      setShowChat(true)
    }, 700)
  }, [userMsg.id] )

  return (
    <div className="message-box-body">
      {
        showChat ?
          <div>
            <div className="chat-date">
              <div className="chat-liner"></div>
              <div className="chat-date-text">Tuesday, April 20, 2021</div>
              <div className="chat-liner"></div>
            </div>
            <div className="chat-status">
              Visitor {userMsg.name} joined the chat
            </div>
            <div className="chat-init">
              <div className="chat-liner"></div>
              <div className="chat-init-text">Chat started</div>
              <div className="chat-liner"></div>
            </div>
            <div className="chat-container">
              {chatView}
              <div className="profile-icon-show">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </div>
              {showTyping ? chatTyping : null}
            </div>
          </div>
        :
        <div className="loader-container">
          <Loader
            type="ThreeDots"
            color="#3399FF"
            height={100}
            width={100}
          />
        </div>
      }
      <div ref={bottomRef}></div>
    </div>
  );
}


  
export default MessageBody;