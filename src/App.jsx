import axios from "axios";
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/Navbar';
import Rates from './components/Rates';
import './App.css';
import Timestamp from './components/Timestamp';
//import {...bootstrap } from 'react-bootstrap';



/**
 * 
 * Create a rates and timestamp var for App to pass into respective components 
 * Have a refresh button in either App or separate component that the user can press 
 * Add a cooldown for this button every 5 minutes
 * 
 */

function App() {
  const [rates, setRates] = useState({});
  const [times, setTimes] = useState({}); //Entire time object   
  const [allowRefetch, setAllowRefetch] = useState(true);
  const [refetchTimer, setRefetchTimer] = useState()


  const fetchAPIData = async () => {

    const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    const { data: { bpi } } = await axios.get(URL); //Returns API promise  

    //Creates an array of bpi rates by reducing each bpi key to its rate_float
    const bpiData = Object.keys(bpi).reduce((accum, currentCode) => {

      //accum becomes an array where each index corresponds to a bpi key, and each value is a rate 
      //currentCode is the curreny key from bpi (USB, GBP or EUR)
      accum[currentCode] = bpi[currentCode].rate_float;

      return accum;
    }, {}); //Retrieves available keys for each bpi

    //Component Exclusive Data Asissgnment
    setRates(bpiData);
    setTimes(data[time]); //Stores entire time object into timestamp 
  }

  //When the page initially mounts
  useEffect(() => {

    fetchAPIData();
   

  }, []);





  const reFetch = () => {
    fetchAPIData();
    setAllowRefetch(false);
    setRefetchTimer(setTimeout(() => { setAllowRefetch(true) }, 300000))  //5 minutes = 300000 ; 3 seconds = 3000 

  }


  return (
    <>
      <body>
        <div className="container">
          <div className="col">
            <NavBar rates={rates}></NavBar>
          </div>

          <div className="py-3">
            <Timestamp></Timestamp>

            {/* fetchAPIData() still refreshes <Timestamp> for some reason, but only local timestamp is updated...?*/}
            {allowRefetch &&

              <button onClick={() => reFetch()} className="relative py-2 font-bold btn btn-primary rounded group">
                <span className="relative"> Re-Fetch </span>
              </button>
            }

            {/* Pending ReFetch */}
            {!allowRefetch &&

              <button className="relative py-2 font-bold btn btn-dark rounded group">
                <span className="relative"> Pending... </span>
              </button>}
          </div>

        </div>


        {/* Have rates only appear if a boolea/string for the component is true (simulate different htmls without messing with react) */}

      </body> {/* End of Body */}


    </>
  )
}

export default App
