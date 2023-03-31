import React, { useContext } from 'react';
import { CoinContext } from '../context/CoinContext'

function Coins() {

    const {
        coins,
        setCoins,
        buyedCoin,
        setBuyedCoin,
        money,
        setMoney,
        handleBuy
    } = useContext(CoinContext)



    return (
        <div className='Coins'>
            {
                coins.map((coin) =>
                    <div className="card" key={coin.id}>
                        <h3>Last Update {new Date(coin.last_updated).toLocaleString()}</h3>
                        <img src={coin.image} alt="" style={{ width: '50px', height: '50px' }} />
                        <h2>{coin?.name}</h2>
                        <h3>Current Price: {(coin?.current_price).toLocaleString()} USD</h3>
                        <p style={coin?.price_change_percentage_24h
                            >= 0 ? { color: 'green' } : { color: 'red' }}>24H Change % {(coin?.price_change_percentage_24h
                            ).toFixed(2)}
                        </p>
                        <button onClick={() => handleBuy(coin)}>BUY</button>
                    </div>
                )
            }
        </div>
    )
}

export default Coins