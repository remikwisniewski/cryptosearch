import React, {useState, useEffect} from 'react';
import axios from 'axios';



function App() {


  // creating state for data
  const [coins, setCoins] = useState([]);

  // useEffect takes in arrow function that gets API url, then then response is the data from the API with an error checker
  
  useEffect(()=> {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(error => { console.log(error)});
  }, []);

  return (
    <div className="App">
      
      <div className="mainApp">
          <div className="mainSearch">
            <h1 className="mainText"> Crypto Currency Search</h1>
            <form>
              <input type='text' placeholder='Search' className="searchBTN"/>
            </form>
          </div>
      </div>
      

      
    </div>
  );
}

export default App;
