import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from './Components/Coin'


function App() {


  // creating state for data, setCoins is used for getting data from API and setSearch gets user input
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  // useEffect takes in arrow function that gets API url, then then response is the data from the API with an error checker
  
  useEffect(()=> {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(error => { console.log(error)});
  }, []);

  // handles user input to get data from
  const handleChange = e => {
    setSearch(e.target.value);
  }

  // filters the change of coins, it changes everything to lower case letters to display what user types in
  const filterCoin = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (   
      <div className="mainApp">
          <div className="mainSearch">
            <h1 className="mainText"> Crypto Currency Search</h1>
            <form>
              <input type='text' placeholder='Search' className="searchBTN" onChange={handleChange}/>
            </form> 
          </div>

          {filterCoin.map(coin => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
      </div>
  );
}

export default App;
