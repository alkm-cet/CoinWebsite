import React, { useContext } from 'react'
import './Market.css';
// CONTEXT
import { CoinContext } from '../../context/CoinContext'
//Images
import arrowdown from '../../images/arrowdown.png'
import arrowup from '../../images/arrowup.png'
//ROUTER
import { Link } from 'react-router-dom'

function Market() {

    const {
        coins,
        watchList,
        handleWatchList
    } = useContext(CoinContext)

    console.log(watchList)




    return (
        <div className='Market'>

            <div className="MarketContainer">

                <div className="marketdiv1">
                    <div className="div1top">
                        <div className="div1topleft">
                            <h2>Market Coins</h2>
                            <p>Lorem, ipsum dolor sit amet.</p>
                        </div>
                        <div className="div1topright">
                            <span className="material-symbols-outlined" style={{ scale: '1.2' }}>
                                search
                            </span>
                            <input type="search" placeholder='Search Coin Name' />
                        </div>
                    </div>
                    <div className="div1bottom">
                        {
                            coins.slice(0, 3).map((coin) =>
                                <div className="div1bottombox">
                                    <div className='a'>
                                        <img src={coin?.image} alt="" style={{ width: '30px', height: '30px' }} />
                                        <h3>{coin?.name}</h3>
                                    </div>
                                    <div className='a'>
                                        <b>${(coin?.current_price).toLocaleString()}</b>
                                        {
                                            coin?.price_change_percentage_24h >= 0
                                                ? <img src={arrowup} style={{ width: '15px' }}></img>
                                                : <img src={arrowdown} style={{ width: '15px' }}></img>
                                        }
                                        {
                                            coin?.price_change_percentage_24h >= 0
                                                ? <b style={{ color: '#00DBBB' }}>%{(coin?.price_change_percentage_24h).toFixed(2)}</b>
                                                : <b style={{ color: '#FF6174' }}>%{(coin?.price_change_percentage_24h).toFixed(2)}</b>
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                {/* --------------------------------------------------------DIV2 */}
                <div className="marketdiv2">
                    <div className="marketdiv2header">
                        <p>Name</p>
                        <p>Price</p>
                        <p>24h %</p>
                        <p>24h High</p>
                        <p>24h Low</p>
                        <p>Market Cap</p>
                    </div>

                    <div className="marketdiv2Main">
                        {
                            coins.map((coin) =>
                                <div className="marketdiv2Card" key={coin.id}>
                                    <div className="rankdiv">
                                        <span className="material-symbols-outlined" style={{ scale: '0.6', cursor: 'pointer' }} onClick={() => handleWatchList(coin)}>
                                            star
                                        </span>
                                    </div>
                                    <div className="rankdiv">
                                        {coin?.market_cap_rank}
                                    </div>
                                    <Link className="marketdiv2Card" to={`/Market/${coin.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        <div className="marketdivcardbox" style={{ gap: '20px' }}>
                                            <img src={coin.image} alt="" style={{ width: '30px', height: '30px' }} />
                                            <p>{coin?.name}</p>
                                        </div>
                                        <div className="marketdivcardbox">
                                            <b>${(coin?.current_price).toLocaleString()}</b>
                                        </div>
                                        <div className="marketdivcardbox">
                                            {
                                                coin?.price_change_percentage_24h >= 0
                                                    ? <img src={arrowup} style={{ width: '15px', height: '15px' }}></img>
                                                    : <img src={arrowdown} style={{ width: '15px', height: '15px' }}></img>
                                            }
                                            {
                                                coin?.price_change_percentage_24h >= 0
                                                    ? <b style={{ color: '#00DBBB' }}>{(coin?.price_change_percentage_24h).toFixed(2)}</b>
                                                    : <b style={{ color: '#FF6174' }}>{(coin?.price_change_percentage_24h).toFixed(2)}</b>
                                            }
                                        </div>
                                        <div className="marketdivcardbox">
                                            <b>${(coin?.high_24h).toLocaleString()}</b>
                                        </div>
                                        <div className="marketdivcardbox">
                                            <b>${(coin?.low_24h).toLocaleString()}</b>
                                        </div>
                                        <div className="marketdivcardbox">
                                            <b>${(coin?.market_cap).toLocaleString()}</b>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
                {/* --------------------------------------------------------DIV3 */}
                <div className="marketdiv3">
                    <div className="marketdiv3-1">
                        <div className="marketdiv3-1left">
                            Buy BTC
                        </div>
                        <div className="marketdiv3-1right">
                            Sell BTC
                        </div>
                    </div>
                    <div className="marketdiv3-2">
                        <div className="marketdiv3-2left">
                            <input type="radio" name="" id="" />
                            <span class="material-symbols-outlined">
                                flag
                            </span>
                            <p>Limit</p>
                        </div>
                        <div className="marketdiv3-2right">
                            <input type="radio" name="" id="" />
                            <span className="material-symbols-outlined">
                                bolt
                            </span>
                            <p>Market</p>
                        </div>
                    </div>
                    <div className="marketdiv3-3">
                        <span class="material-symbols-outlined">
                            account_balance_wallet
                        </span>
                        $12.345
                    </div>
                    <div className="marketdiv3-4">
                        <small className='smalls'>From</small>
                        <select name="" id="">
                            {
                                coins.map(coin =>
                                    <option value={coin.name} > {coin.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="marketdiv3-5">
                        <small className='smalls'>To</small>
                        <select name="" id="">
                            {
                                coins.map(coin =>
                                    <option value={coin.name}>{coin.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="marketdiv3-6">
                        <button className="marketdiv3-6BTN">Buy Coin</button>
                    </div>
                </div>
                {/* --------------------------------------------------------DIV4 */}
                <div className="marketdiv4">
                    <h2>Your Watch List</h2>
                    {
                        watchList.map((list) =>
                            <div className="marketdiv4Card" key={list.id}>
                                <div className="rankdiv">
                                    {list?.market_cap_rank}
                                </div>
                                <div className="marketdiv4cardbox1" style={{ gap: '20px' }}>
                                    <img src={list.image} alt="" style={{ width: '30px', height: '30px' }} />
                                    <p>{list?.name}</p>
                                </div>
                                <div className="marketdiv4cardbox2">
                                    <b>${(list?.current_price).toLocaleString()}</b>
                                </div>
                                <div className="marketdiv4cardbox3">
                                    {
                                        list?.price_change_percentage_24h >= 0
                                            ? <img src={arrowup} style={{ width: '15px', height: '15px' }}></img>
                                            : <img src={arrowdown} style={{ width: '15px', height: '15px' }}></img>
                                    }
                                    {
                                        list?.price_change_percentage_24h >= 0
                                            ? <b style={{ color: '#00DBBB' }}>{(list?.price_change_percentage_24h).toFixed(2)}</b>
                                            : <b style={{ color: '#FF6174' }}>{(list?.price_change_percentage_24h).toFixed(2)}</b>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>

        </div >
    )
}

export default Market