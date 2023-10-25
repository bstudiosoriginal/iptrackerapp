import arrowsvg from '../assets/images/icon-arrow.svg'
import MapView from './MapView';
import 'leaflet/dist/leaflet.css'
import {useState, FormEvent} from 'react'
import { is600pxWidth } from './mediaq';


const Homepage = () => {

  const [ipAddress, setIpAddress] = useState('192.212.174.101')
  const isp = 'Space X Starlink';
  const timezone = 'UTC -05:00'
  const location = 'Brooklyn, NY 100001'
  const isNotDesktop = is600pxWidth()
  

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(event)
    setIpAddress('192.168.33.3')
  }

  return (
    <>

      <div className="background">
        <h2 className="textheader">IP Address Tracker</h2>
        <div className="formsetup">
          <div className="cardbackgound">
            <input type='text' id='ipfield' name='ip'></input>

            <button className="querybutton" onSubmit={handleSubmit}>
              <img src={arrowsvg}></img>
            </button>
          </div>
          <div className='infocardbackgound'>
            <div className='infoitem'>
              <p>IP ADDRESS</p>
              <h1>{ipAddress}</h1>
            </div>
            <div className='infoitem'>
              <p>Location</p>
              <h1>{location}</h1>
            </div>
            <div className='infoitem'>
              <p>Timezone</p>
              <h1>{timezone}</h1>
            </div>
            <div className='infoitem'>
              <p>ISP</p>
              <h1>{isp}</h1>
            </div>
          </div>
        </div>
        <img
          src={isNotDesktop?"src/assets/images/pattern-bg-desktop.png": "src/assets/images/pattern-bg-mobile.png"}
          className="backdrop"
        />
        <div className='mapcontainer'>
          <MapView/>
        </div>
        
      </div>

    </>
  );
};

export default Homepage;
