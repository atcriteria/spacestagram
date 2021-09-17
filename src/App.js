import './App.css';
import {useState, useEffect} from 'react';
import CardHolder from './components/CardHolder';
import formatDate from './util/formatDate';
import axios from 'axios';

let date = new Date()
let testData = {test: 42069}

const today = formatDate()
date.setDate(1)
const currentMonth = formatDate(date)

function App() {
  const [state, setState] = useState(null)

  const key = process.env.REACT_APP_API_KEY
  console.log(today)
  console.log(currentMonth)
  console.log(testData.test)
  console.log((testData["test"]) ? "true" : "false")

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod`, {
      params: {
        start_date: currentMonth,
        end_date: today,
        api_key: key
      }
    })
      .then(res => {
        console.log(res)
        setState(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1>App</h1>
      <CardHolder data={state} />
    </div>
  );
}

export default App;