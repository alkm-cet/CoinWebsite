import React, { useContext, useState, useEffect } from 'react'
import './SinglePage.css';
//ROUTER
import { Link, useParams } from 'react-router-dom'
// CONTEXT
import { CoinContext } from '../../context/CoinContext'
//AXIOS
import axios from 'axios';
//Chart.JS
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

function SinglePage() {



    const {
        coins,
    } = useContext(CoinContext)

    const { coinId } = useParams()
    const singleCoin = coins.find((coin) => coin.id === coinId);
    // ----------------------------------

    const [chartData, setChartData] = useState([])
    const [info, setInfo] = useState([])
    const [chartDay, setChartDay] = useState(30)

    const charturl = `https://api.coingecko.com/api/v3/coins/${singleCoin?.id}/market_chart?vs_currency=usd&days=${chartDay}`

    const handleDay = (e) => {
        setChartDay(e.target.value)
    }

    useEffect(() => {
        try {
            axios.get(charturl).then((response) => {
                setChartData(response.data)
            })
        }
        catch (err) {
            console.error(err);
        }
    }, [chartDay])

    useEffect(() => {
        try {
            axios.get(infoUrl).then((response) => {
                setInfo(response.data)
            })
        }
        catch (err) {
            console.error(err);
        }
    }, [])

    if (!chartData) {
        return <div>Loading..</div>
    }

    //----------------------------------FETCHING INFO


    const infoUrl = `https://api.coingecko.com/api/v3/coins/${singleCoin?.id}`





    // ---------------------------------

    const coinCharData = chartData?.prices?.map(value => ({ x: value[0], y: value[1].toFixed(2) }))
    console.log(chartData)

    const options = {
        responsive: true,
        elements: {
            point: {
                radius: 1,
            }
        }
    }

    const data = {
        labels: coinCharData?.map(value => moment(value.x).format('MMM DD')),
        datasets: [
            {
                fill: true,
                label: coinId,
                data: coinCharData?.map(val => val.y),
                borderColor: '#315EFB',
                backgroundColor: 'rgba(255, 255, 255, 0.459)'
            }
        ]
    }

    return (
        <div className='SinglePage'>
            <div className="singlepageleft">
                <div className="singleleftop">
                    <img src={info?.image?.large} alt="" style={{ width: '100px', height: '100px' }} />
                    <h1>{info?.name}</h1>
                </div>
                <p>{info?.description?.en?.split(". ")[0]}.</p>
                <div className="singleleftbottom">
                    <h2>Rank: {info?.market_cap_rank}</h2>
                    <h2>Current Price: ${(info?.market_data?.current_price?.usd)}</h2>
                    <h2>Market Cap: ${(info?.market_data?.market_cap?.usd)}</h2>
                </div>
                <Link to='/Market'><button className='BackBTN'>Back</button></Link>
            </div>

            <div className="linediv">
                <h1>Time Zone : {chartDay} Day</h1>
                <Line options={options} data={data} className='line' />
                <div className="timeBTNdiv">
                    <button className='timeBTN' onClick={handleDay} value='1'>1 Day</button>
                    <button className='timeBTN' onClick={handleDay} value='7'>7 Day</button>
                    <button className='timeBTN' onClick={handleDay} value='30'>30 Day</button>
                </div>
            </div>

        </div>
    )
}

export default SinglePage