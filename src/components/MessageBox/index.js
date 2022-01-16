import './index.scss';

import { connect } from 'react-redux';
import { loremIpsum } from "lorem-ipsum";

import MessageHead from './MessageBoxHead/index';
import MessageBody from './MessageBoxBody/index';
import MessageBottom from './MessageBoxBottom/index'

import { addNewText } from '../../actions/talkActions'
import { useState } from 'react';

function MessageBox(props) {
  const [showTyping, setShowTyping] = useState(false)

  const { userData, userMsg, addNewTextWithID } = props;

  const sendUserMsg = (msg) => {
    const newMsg = {
      msg: {
        text:`${msg}`,
        sender: true,
        timestamp: '000000'
      },
      id: userData ? userData.id : ''
    }
    addNewTextWithID(newMsg);
    setShowTyping(true);
    setTimeout(() => {
      sendReply();
    }, 1500)
  }

  const sendReply = () => {
    setShowTyping(false)
    const newMsg = {
      msg: {
        text:`${loremIpsum()}`,
        sender: false,
        timestamp: '000000'
      },
      id: userData ? userData.id : ''
    }
    addNewTextWithID(newMsg)
  }

  return (
    <div className="message-box">
      {userData ? <MessageHead userData = {userData} /> : null}
      {userMsg ? <MessageBody showTyping = {showTyping} userMsg = {userMsg} /> : null}
      {userData ? <MessageBottom sendMsg = {(msg) => sendUserMsg(msg)} /> : null}
    </div>
  );
}


const mapStateToProps = (state) => {
    return {
        currentTextWindow : state.currentTextWindow,
        userData : state.connects.find(data => data.id === state.currentTextWindow),
        userMsg : state.text.find(data => data.id === state.currentTextWindow),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addNewTextWithID: (newMsg) => { 
            dispatch(addNewText(newMsg.id, newMsg.msg)) 
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
