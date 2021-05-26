import React from 'react';

// arrow function Coin that 
const Coin = ({name, image, symbol, price, volume}) => {

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
                </div>
            </div>
        </div>
    )
} 

export default Coin;
