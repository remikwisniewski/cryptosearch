import React from 'react';

// arrow function Coin that 
const Coin = ({name, price, symbol, marketcap, volume, priceChange, image}) => {


    return (
        <div className='coinContainer'>
            <div className='coinRow'>
                <div className='coin'>
                    <img src={image} alt='crypto coin'/>
                    <h1>{name}</h1>
                    <p className='coinSymbol'>{symbol}</p>
                </div>
                <div className='coinData'>
                    <p className='coinPrice'>${price}</p>
                    <p className='coinVolume'>${volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className='coinRed'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coinGreen'>{priceChange.toFixed(2)}%</p>
                    )}

                    <p className='coinMarketcap'> Mkt Cap: ${marketcap.toLocaleString()} </p>
                </div>
            </div>
        </div> // JSX CODE to make red/green output based on price change
    )
} 

export default Coin;
