import axios from "axios";
import { useEffect, useState } from 'react' 

const Timestamp = () => {
    const [timestamp, setTimestamp] = useState({}); //Entire time object  
    const [localTime, setLocalTime] = useState(Date()); //UTC time
    
    const fetchAPIData = async () => {
        
        const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const {data:{time}} = await axios.get(URL); //Returns API promise  

        
        //Component Exclusive Data Asissgnment
        setTimestamp(time); //Stores entire time object into timestamp 
        setLocalTime(Date.parse(timestamp["updated"]).toLocaleString());

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