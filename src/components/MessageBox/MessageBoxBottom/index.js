import { useState } from 'react';
import './index.scss';

function MessageBottom(props) {
  const [textmsg, setTextmsg] = useState('')

  const onKeyPress = (e) => {
    if(e.which === 13) {
      sendTextMsg();
    }
  }

  const sendTextMsg = () => {
    if (textmsg) {
      props.sendMsg(textmsg)
      setTextmsg('')
    }
  }

  return (
    <div className="message-box-bottom">
      <input className="message-box-input" onKeyPress={onKeyPress} value={textmsg} placeholder="Type your message and press enter" onChange={(e) => setTextmsg(e.target.value)}/>
      <div className="message-box-icon">
          <div className="message-box-left">
            <i className="fa fa-smile-o" aria-hidden="true"></i>
            <i className="fa fa-paperclip" aria-hidden="true"></i>
            <i className="fa fa-calendar" aria-hidden="true"></i>
          </div>
          <div className="message-box-right">
            <button className="msg-send-button" onClick={() => sendTextMsg()}><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
          </div>
      </div>
    </div>
  );
}


  
export default MessageBottom;