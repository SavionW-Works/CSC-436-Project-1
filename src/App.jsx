import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import NavBar from './components/Navbar'; 
import Rates from './components/Rates';
import './App.css';
//import {...bootstrap } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <NavBar></NavBar> 
        <Rates></Rates>
      </body> {/* End of Body */}



      <button className="btn btn-primary">Primary</button>
    </>
  )
}

export default App
