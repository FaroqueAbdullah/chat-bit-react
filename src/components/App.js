import './App.scss';

import ConnectList from './ConnectList/index';
import MessageBox from './MessageBox/index';
import ActivityList from './ActivityList/index'

function App() {

  return (
    <div className="App">
      <div className="chatbox-container"> 
        <div className="chatbox-connects">
          <ConnectList />
        </div>
        <div className="chatbox-messeges">
          <MessageBox />
        </div>
        <div className="chatbox-activities">
          <ActivityList />
        </div>
      </div>
    </div>
  );
}

export default App;
