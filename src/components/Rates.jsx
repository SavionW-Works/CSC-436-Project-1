import axios from "axios";
import { useState } from 'react' 

const Rates = () => {
    const [rates, setRates] = useState([]);   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);  

    const [direction, setDirection] = useState(""); //Forward and Back?

    const fetchRates = () => {
        
        setLoading(true);
        const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

        //Creating API promises in AXIOS 
        axios.get(URL).then(({data}) => {setRates(data)})
        
        .catch(error => {
            setError(Error);
        })
        
        .finally(() => {setLoading(false);})
    }  

    
    return <div> 
        {/* <button onClick={fetchRates}>Fetch Rates</button>
        <p> {rates.chartName}</p> */}
        {!!error && <pre>{JSON.stringify(error,0,1)}</pre>}
        {!!loading && <p>Loading</p>}
        {!loading  && (
        <>
            <button onClick={fetchRates}>Fetch Rates</button> 
            {<div>
                {rates.map((
                    
                    {bpi: {USD: {code, rate_float, symbol} }}
                    
                    ) => {
                    return (<p key={symbol}>
                        {code} to 1 Bitcoin is {rate_float}
                    </p>);

                })}
                </div>}
        </>
        )}
        
    </div>
} 

export default Rates;