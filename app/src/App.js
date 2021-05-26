import React, {useState, useEffect} from 'react';
import axios from 'axios';



function App() {

  const [coins, setCoins] = useState([]);

  // useEffect takes in arrow function that gets API url, then then response is the data from the API
  useEffect(()=> {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data);
      console.log(res.data);
    })
  })

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
