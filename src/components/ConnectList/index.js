import './index.scss';
import ConnectHead from './ConnectHead/index';
import ConnectTab from './ConnectTab/index';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addCurrentTextWindowID } from '../../actions/talkActions'


function ConnectList(props) {
  const [filteredConnect, setFilteredConnect] = useState([]);

  const { connects, addCurrentTextWindowID,  } = props;

  const filterCOnnection = (status) => {
    const connectsList = connects.filter((data) => data.status === status);
    setFilteredConnect(connectsList)
  }
  
  const setConnectionStatus = (status) => {
    filterCOnnection(status)
  }

  useEffect(() => {
    filterCOnnection('online')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const allCOnnects = filteredConnect.map( (data , i) => {
    if (i === 0) {
      addCurrentTextWindowID(data.id)
    }
    return (
      <div key={i}>
        <ConnectTab 
          name={data.name} 
          id={data.id} 
          status={data.status} 
          country={data.country}
          setCurrentTextWindowID={(id) => addCurrentTextWindowID(data.id)}
        />
      </div>
      
    )
  })


  return (
    <div className="connect-list">
     <ConnectHead setConnectionStatus = {( tag ) => setConnectionStatus(tag)} />
     { allCOnnects }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    connects : state.connects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCurrentTextWindowID: (id) => { 
      setTimeout(() => {
        dispatch(addCurrentTextWindowID(id)) 
      }, 100)
      
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ConnectList);