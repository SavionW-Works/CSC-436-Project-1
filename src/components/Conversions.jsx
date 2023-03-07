import axios from "axios";
import { useEffect, useState } from 'react'

const Conversions = ({ rates2 }) => { //Given slightly different name to avoid major refactoring (again)
    const [rates, setRates] = useState(rates2);

    const [toggleExchange, setToggleExchange] = useState(false);

    const [sortType, setSortType] = useState("Ascending");  //The search value given by users  

    const [selectedCurrency, setSelectedCurrency] = useState("USD");

    const [selectedQuantity, setSelectedQuantity] = useState(1);


    const currencyHandler = (e) => {
        setSelectedCurrency(e.target.value);

        console.log(e.target.value)
    }

    const quantityHandler = (e) => {
        setSelectedQuantity(e.target.value);
    }

    const showExchange = () => {
        setToggleExchange(true);
        console.log(selectedQuantity)
    }



    // const fetchAPIData = async () => {

    //     const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    //     const { data: { bpi } } = await axios.get(URL); //Returns API promise  

    //     //Creates an array of bpi rates by reducing each bpi key to its rate_float
    //     const bpiData = Object.keys(bpi).reduce((accum, currentCode) => {

    //         //accum becomes an array where each index corresponds to a bpi key, and each value is a rate 
    //         //currentCode is the curreny key from bpi (USB, GBP or EUR)
    //         accum[currentCode] = bpi[currentCode].rate_float;

    //         return accum;
    //     }, {}); //Retrieves available keys for each bpi

    //     //Component Exclusive Data Asissgnment
    //     setRates(bpiData);

    // }


    const sortHandler = () => {

        let temp = {};
        let hold = {};

        if (sortType == "Ascending") {
            setSortType("Descending")


            //Creates array of JUST keys, by value order
            temp = Object.keys(rates).sort((a, b) => rates[b] - rates[a])

            //Creates an object with both Keys and Values to mutate rates
            for (let i in temp) {
                hold[temp[i]] = rates[temp[i]]
            }

            setRates(hold)

        }

        else {
            setSortType("Ascending")

            //Creates array of JUST keys, by value order
            temp = Object.keys(rates).sort((a, b) => rates[a] - rates[b])

            //Creates an object with both Keys and Values to mutate rates
            for (let i in temp) {
                hold[temp[i]] = rates[temp[i]]
            }

            setRates(hold)

        }
    }

    return <>

        <section id='Conversions' className="p-3">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <table>
                        <thead>
                            <tr>
                                <th className="fs-3"> Currency </th>
                                <th className="fs-3"> Bitcoins </th>
                            </tr>
                        </thead>

                        <tbody>{
                            Object.keys(rates).map((curr) => {

                                return <tr key={`${curr}`} className="fs-5">
                                    <td>1 {curr}</td>
                                    <td>{rates[curr]} BTC</td>
                                </tr>
                            })

                        }</tbody>
                    </table>

                    <div className="py-3">
                        <button onClick={sortHandler} className="relative py-2 font-bold btn btn-primary rounded group">
                            <span className="relative">Sort ({sortType})</span>
                        </button>
                    </div>

                </div>
            </div>

        </section>

        <section id='Conversion Selectors' className="p-3">
            <div className="container">

                <div className="col align-items-center justify-content-center">
                    <label for="Currency Dropdown" className="px-3 fs-3"> Currency: </label>

                    <select name="Currency Dropdown" onChange={currencyHandler} id="Currency Dropdown" >
                        {Object.keys(rates).map((curr) => {
                            return <option value={curr} default="Currency">{curr}</option>
                        })}
                    </select>

                    <label for="quantity" className="px-4 fs-3">Quantity:</label>
                    <input type="number" onChange={quantityHandler} value={selectedQuantity} name="quantity" min="1"></input>

                    <span className="px-3">
                        <button onClick={showExchange} className="relative py-2 font-bold btn btn-primary rounded group">
                            <span className="relative"> Exchange </span>
                        </button>
                    </span>
                    



                    {toggleExchange && <p className="fs-3 pt-3"> {rates[selectedCurrency] * selectedQuantity} BTC </p>}
                </div>

            </div>

        </section>

    </>
}

export default Conversions;