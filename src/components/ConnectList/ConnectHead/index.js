import { useState } from 'react';
import './index.scss';

function ConnectHead(props) {
    const [activeTag, setActiveTag] = useState('online')

    const changeConnectionStatus = ( tag ) => {
        props.setConnectionStatus(tag)
        setActiveTag(tag)
    }

    return (
      <div className="connect-head">
       <div className={`connect-head-tag ${activeTag === 'online' ? 'active' : ''}`} onClick={() => changeConnectionStatus('online')}>ONLINE</div>
       <div className={`connect-head-tag ${activeTag === 'engaged' ? 'active' : ''}`} onClick={() => changeConnectionStatus('engaged')}>ENGAGED</div>
       <div className={`connect-head-tag ${activeTag === 'queued' ? 'active' : ''}`} onClick={() => changeConnectionStatus('queued')}>QUEUED</div>
       <div className={`connect-head-tag ${activeTag === 'agent' ? 'active' : ''}`} onClick={() => changeConnectionStatus('agent')}>AGENT</div>
      </div>
    );
  }
  
  export default ConnectHead;