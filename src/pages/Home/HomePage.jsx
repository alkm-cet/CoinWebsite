import React, { useContext } from 'react';
import './HomePage.css';
//ROUTER
import { Link } from 'react-router-dom'
//IMAGES
import wallet from '../../images/wallet.png'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import arrowdown from '../../images/arrowdown.png'
import arrowup from '../../images/arrowup.png'
//CONTEXT
import { CoinContext } from '../../context/CoinContext'

function HomePage() {

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
        <div className='HomePage'>

            <div className="homepagetop">
                <div className="homepagetopleft">
                    <h1>Create Your First Decentralized Wallet</h1>
                    <p>The easiest wat to manage multiple cyrptocurrency assets</p>
                    <Link to='/Market' style={{ color: 'black', textDecoration: 'none' }}>
                        <button className='MarketBTN'>Market</button>
                    </Link>
                </div>

                <div className="homepagetopright" style={{ backgroundImage: `url(${wallet})` }}>

                </div>
            </div>

            {/* -----------------------------------------------MID */}

            <div className="homepagemid">

                <div className="coinContainer">
                    <div className="coinHeader">
                        <p>Name</p>
                        <p>Price</p>
                        <p>24h %</p>
                        <p>24h High</p>
                        <p>24h Low</p>
                        <p>Market Cap</p>
                    </div>

                    <div className="coinMain">
                        {
                            coins.slice(0, 7).map((coin) =>
                                <div className="card" key={coin.id}>
                                    <div className="carddiv1" style={{ gap: '20px' }}>
                                        {coin?.market_cap_rank}
                                        <img src={coin.image} alt="" style={{ width: '50px', height: '50px' }} />
                                        <p>{coin?.name}</p>
                                    </div>
                                    <div className="carddiv2">
                                        <b>${(coin?.current_price).toLocaleString()}</b>
                                    </div>
                                    <div className="carddiv3">
                                        {
                                            coin?.price_change_percentage_24h >= 0
                                                ? <img src={arrowup} style={{ width: '15px' }}></img>
                                                : <img src={arrowdown} style={{ width: '15px' }}></img>
                                        }
                                        {
                                            coin?.price_change_percentage_24h >= 0
                                                ? <b style={{ color: '#00DBBB' }}>{(coin?.price_change_percentage_24h).toFixed(2)}</b>
                                                : <b style={{ color: '#FF6174' }}>{(coin?.price_change_percentage_24h).toFixed(2)}</b>
                                        }
                                    </div>
                                    <div className="carddiv4">
                                        <b>${(coin?.high_24h).toLocaleString()}</b>
                                    </div>
                                    <div className="carddiv4">
                                        <b>${(coin?.low_24h).toLocaleString()}</b>
                                    </div>
                                    <div className="carddiv4">
                                        <b>${(coin?.market_cap).toLocaleString()}</b>
                                    </div>
                                    {/* <Link to={`/Market/${coin.id}`}><button className='infoBTN'>Info</button></Link> */}
                                </div>
                            )
                        }
                    </div>
                </div>


            </div>

            {/* -----------------------------------------------BOTTOM */}
            <div className="homepagebottom">

                <div className="parent">
                    <div className='div1'>
                        <p>Dappy is light wallet powered by Blockstack.
                            It uses Gaia decentralized storage and encryption option.
                            Dappy doesn't store or proceed user private key, the all data
                            are securely stored in the Gaia. Dappy was created by the BC
                            Net that trust in crypto and decentralized applications.
                        </p>
                    </div>
                    <div className='div2'>
                        <h2>Multi-Currencies</h2>
                        <img className='gridImages' src={img1} alt="" />
                        <p>Receive, send and store the most popular coins, like Bitcoin, Ethereum,
                            Litecoin, Dash and lots more.
                        </p>
                    </div>
                    <div className='div3'>
                        <h2>Free and Open Source</h2>
                        <img className='gridImages' src={img2} alt="" />
                        <p>Fully open and transparent wallet. Our code is
                            <b> open source</b> and trusted by Blockstack Team.
                        </p>
                    </div>
                    <div className='div4'>
                        <h2>Tokens</h2>
                        <img className='gridImages' src={img3} alt="" />
                        <p>Full support for any tokens on Ethereum network.
                            Bitcoin tokens (Omnilayer) is coming soon.
                        </p>
                    </div>
                    <div className='div5'>
                        <h2>Exchange</h2>
                        <p>In-app exchange is supported by ShapeShift, it allows to
                            convert coins to each other in the most intuitive and easiest way
                        </p>
                        <img className='gridImages' src={img4} alt="" />

                    </div>
                    <div className='div6'>
                        <h2 style={{ marginBottom: '30px' }}>Roadmap</h2>
                        <img className='gridImages' src={img5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage