import './index.scss';
import ReactCountryFlag from "react-country-flag"

function ConnectTab(props) {

    const { name, status, id, country, setCurrentTextWindowID } = props;

    return (
      <div className="connect-tab" key={name} onClick={()=> setCurrentTextWindowID(id)}>
        <div className="connect-tab-image">
          <i className="fa fa-laptop" aria-hidden="true"></i>
          <div className={`active-status active-${status}`}></div>
        </div>
        <div className="connect-tab-data">
            <div className="connect-tab-data-name">
                {name}
            </div>
            <div className="connect-tab-data-id">
                {id}
            </div>
            <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>
        <div className="connect-tab-country">
          <ReactCountryFlag countryCode={country} />
        </div>
      </div>
    );
  }
  
  export default ConnectTab;