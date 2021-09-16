import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState(null)
  const key = process.env.REACT_APP_API_KEY
  const date = new Date()
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toPrecision(2)
  const day = date.getDay() +1
  console.log(`Today's date: ${year}/${month}/${day}`)

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod`, {
      params: {
        count: 10,
        api_key: key
      }
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;