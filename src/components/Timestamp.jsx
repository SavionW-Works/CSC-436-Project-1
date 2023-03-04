import axios from "axios";
import { useEffect, useState } from 'react' 

const Timestamp = () => {
    const [timestamp, setTimestamp] = useState({});   
    const [localTime, setLocalTime] = useState(Date());

    // const fetchRates = () => {
        
    //     setLoading(true);
    //     const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    //     //Creating API promises in AXIOS 
    //     axios.get(URL).then(({data}) => {setRates(data)})
        
    //     .catch(error => {
    //         setError(Error);
    //     })
        
    //     .finally(() => {setLoading(false);})
    // }   
    
    const fetchAPIData = async () => {
        
        const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const {data:{time}} = await axios.get(URL); //Returns API promise  

        setTimestamp(time); //Stores entire time object into timestamp 
        setLocalTime(Date.parse(timestamp["updated"]).toLocaleString())
        console.log(localTime); 

        /**
         * Time has a key called updatedISO with ISO 8601 time 
         * ISO time is always YYYY-MM-DD or the first 10 chars 
         * Parse these from time to put into a moment function 
         * Store user's 
         */

    }

    useEffect(() => {
        fetchAPIData();
    }, []);

    

    return <>  
    
        <div className="align-items center"> 
            <p className="fs-2"> Last Updated </p> 
            <p className="fs-5">{timestamp["updated"]}</p>  
            <p className="fs-5">Local Time: {Date(localTime)}</p> 
        </div>
       
        

        

        
    </>
} 

export default Timestamp;