
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import RandomButton from './RandomButton.js'

  function App() {
  const access_token = "live_iMo27CNPRlmZoF536R300rUgeZku3cnlWplFeIo7dpQI7z6YYeRaqx8NlFZAAWXF"
  const [catData, setCatData] = useState([])
  useEffect(() => { 
    console.log('effect')
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=25&has_breeds=1', 
      {headers: {
      'x-api-key': `${access_token}`
        }
      })
      .then(response => {
        console.log('promise fulfilled')
        let responsedata = response.data
        setCatData(responsedata)
        console.log(responsedata[0])

      })
    }, [])
    return (
    <div>
        <RandomButton catData = {catData}/>
    </div>
    )
  
}

export default App;
