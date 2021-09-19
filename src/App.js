import './App.css';
import {useState, useEffect} from 'react';
import CardHolder from './components/CardHolder';
import formatDate from './util/formatDate';
import axios from 'axios';

let date = new Date()

const today = formatDate()
date.setDate(1)
const currentMonth = formatDate(date)
const initializeLocalData = localStorage.getItem("data")
if (initializeLocalData === null){
  localStorage.setItem("data", JSON.stringify({"data-initialized": true}))
}

function App() {
  const [state, setState] = useState(null)

  const key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod`, {
      params: {
        start_date: currentMonth,
        end_date: today,
        api_key: key
      }
    })
      .then(res => {
        setState(res.data)
      })
      .catch(err => {
        alert("There was a problem in retrieving data from the API\n\nPlease try refreshing the page")
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="app-header">SPACE-STAGRAM</h1>
      <p>
        This application uses the free <a href="https://www.nasa.gov/" title="National Aeronautics and Space Administration">NASA</a> API, <a href="https://api.nasa.gov/#browseAPI">Astronomy Picture of the Day (APOD)</a>.
      </p>
      <CardHolder data={state} />
    </div>
  );
}

export default App;