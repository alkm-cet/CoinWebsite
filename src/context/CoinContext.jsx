import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CoinContext = createContext();

function CoinContextProvider({ children }) {

    const [coins, setCoins] = useState([]);
    const [buyedCoin, setBuyedCoin] = useState([])
    const [watchList, setWatchList] = useState([])
    const [money, setMoney] = useState(10000);
    const [initial, setInitial] = useState();

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en'

    useEffect(() => {
        try {
            axios.get(url).then((response) => {
                setCoins(response.data)
            })
        }
        catch (err) {
            console.error(err);
        }
    }, [])

    if (!coins) {
        return <div>Loading...</div>
    }


    const handleBuy = (coin) => {
        setBuyedCoin([...buyedCoin, coin])
        setMoney(money - coin.current_price)
        localStorage.setItem('buyedCoin', buyedCoin)
    }

    const handleWatchList = (coin) => {
        const listedCoin = coins.find((item) => item.id === coin.id)
        if (listedCoin) {
            setWatchList([...watchList.filter(item => item.id !== coin.id), listedCoin])
        } else {
            setWatchList([...watchList, listedCoin])
        }
    }


    // const buyCoin = (coin) => {
    //     if (money < coin.current_price) {
    //         alert("Yetersiz bakiye")
    //     }
    //     else {
    //         setMoney(money - coin.current_price);

    //         const newCoins = { ...buyedCoin };
    //         if (newCoins[coin.id] !== undefined) {
    //             newCoins[coin.id].buyedCount += 1;
    //         }
    //         else {
    //             newCoins[coin.id] = { ...coin, buyedCount: 1 }
    //         }
    //         setBuyedCoin(newCoins);
    //     }
    // }




    return (
        <CoinContext.Provider
            value={{
                coins,
                setCoins,
                buyedCoin,
                setBuyedCoin,
                money,
                setMoney,
                handleBuy,
                initial,
                setInitial,
                watchList,
                handleWatchList
            }}>
            {children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider