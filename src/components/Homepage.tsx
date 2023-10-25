import arrowsvg from '../assets/icon-arrow.svg'
import MapView from './MapView';
import 'leaflet/dist/leaflet.css'
import {useState} from 'react'
import { is600pxWidth } from './mediaq';
import axios from 'axios';


const Homepage = () => {


  const isNotDesktop = is600pxWidth()
  const [post, setPost] = useState({ip: '192.212.174.101', org: 'SpaceX Starlink', utc_offset: '-0500', city: 'Brooklyn, NY', region: '', postal: '100001', latitude: 5.6037, longitude: -0.1870})
  
  function getURL() {
    var ipaddress: string = '192.212.174.101'
    var doc = document.getElementById('ipfield') as HTMLInputElement 
    if (doc != null){
      ipaddress = doc.value
    }
    console.log(ipaddress, 'url called')
    if (ipaddress?.split('.').length != 4){
      return
    }
    var baseURL = `https://ipapi.co/${ipaddress}/json/`
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  

  return (
    <>

      <div className="background">
        <h2 className="textheader">IP Address Tracker</h2>
        <div className="formsetup">
          <div className="cardbackgound">
            <input type='text' id='ipfield' name='ip'></input>

            <button className="querybutton" onClick={()=>getURL()}>
              <img src={arrowsvg}></img>
            </button>
          </div>
          <div className='infocardbackgound'>
            <div className='infoitem'>
              <p>IP ADDRESS</p>
              <h1>{post.ip}</h1>
            </div>
            <div className='infoitem'>
              <p>Location</p>
              <h1>{post.city+' '+post.region+' '+post.postal}</h1>
            </div>
            <div className='infoitem'>
              <p>Timezone</p>
              <h1>{'UTC '+post.utc_offset.substring(0, 3)+':'+post.utc_offset.substring(2, 4)}</h1>
            </div>
            <div className='infoitem'>
              <p>ISP</p>
              <h1>{post.org}</h1>
            </div>
          </div>
        </div>
        <img
          src={isNotDesktop?window.location.origin+"/images/pattern-bg-desktop.png": window.location.origin+"/images/pattern-bg-mobile.png"}
          className="backdrop"
          alt='backdrop'
        />
        <div className='mapcontainer'>
          <MapView longitude={post.longitude} latitude={post.latitude}/>
        </div>
        
      </div>

    </>
  );
};

export default Homepage;
