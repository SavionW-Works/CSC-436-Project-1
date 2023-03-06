import axios from "axios";
import { useEffect, useState } from 'react' 

const Rates = ({rates}) => {
    //const [rates, setRates] = useState({});   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);  

    const [direction, setDirection] = useState(""); //Forward and Back?
 
    
    const fetchAPIData = async () => {
        
        const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const {data:{bpi}} = await axios.get(URL); //Returns API promise  
        
        //Creates an array of bpi rates by reducing each bpi key to its rate_float
        const bpiData = Object.keys(bpi).reduce((accum, currentCode) => {
         
            //accum becomes an array where each index corresponds to a bpi key, and each value is a rate 
            //currentCode is the curreny key from bpi (USB, GBP or EUR)
            accum[currentCode] = bpi[currentCode].rate_float;  
            
            return accum;
        }, {}); //Retrieves available keys for each bpi

        //Component Exclusive Data Asissgnment
        setRates(bpiData); 

    }

    useEffect(() => {
        fetchAPIData();
    }, []);

    

    return <div> 
        {/* <button onClick={fetchRates}>Fetch Rates</button>
        <p> {rates.chartName}</p> */}
        {/* {!!error && <pre>{JSON.stringify(error,0,1)}</pre>} */}
        {/* {!!loading && <p>Loading</p>} */}
         
        

        {/* Put the following in switches  */}
        {Object.keys(rates).map((curr) => {
           return <div>
            <p key={curr}> 1 {curr} to {rates[curr]} Bitcoin,  1 Bitcoin  is {1/rates[curr]} {curr} </p> 
           </div>
           
        })} 

        

        

        
    </div>
} 

export default Rates;