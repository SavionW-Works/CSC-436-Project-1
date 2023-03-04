import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import NavBar from './components/Navbar'; 
import Rates from './components/Rates';
import './App.css';
import Timestamp from './components/Timestamp';
//import {...bootstrap } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <body> 
        <div className="container">
          <div className="col">
            <NavBar></NavBar> 
          </div>
        </div>
         

        {/* Have rates only appear if a boolea/string for the component is true (simulate different htmls without messing with react) */}
        
      </body> {/* End of Body */} 

      <Timestamp></Timestamp>
    </>
  )
}

export default App
