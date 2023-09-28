import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import axios from "./axiosConfig"
function App() {
  const [data, setData] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleButtonClick = (evt)=>{
    evt.preventDefault()
    getAllData()
  }

  const getAllData = async ()=>{
    try {
      const resp = await axios.get("_health")
      setData(resp?.data)
    } catch (error) {
        console.error(error)
        // Set state for error
        setErrorMessage("Error getting your data")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
      <div>
        <button onClick={handleButtonClick}>Click Me!</button>

        <h1>{data}</h1>

        <h2>Errors</h2>
        <h3>{errorMessage}</h3>
      </div>
    </div>
  );
}

export default App;
