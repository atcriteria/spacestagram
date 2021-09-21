import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CardHolder from './components/CardHolder';
// import formatDate from './util/formatDate';
import axios from 'axios';

let date = new Date()

// const today = formatDate()
date.setDate(1)
// const currentMonth = formatDate(date)
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
        // Enable these for more dynamic rendering
        // start_date: currentMonth,
        // end_date: today,
        // 
        // Results are currently static
        start_date: "2021-07-01",
        end_date: "2021-08-01",
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
    <main className="App">
      {(state) ? <Header /> : ""}
      <CardHolder data={state} />
      {(state) ? <Footer /> : ""}
    </main>
  );
}

export default App;