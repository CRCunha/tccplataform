import React from 'react'
import './cardCharts.css'

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import IconButton from '@material-ui/core/IconButton';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const generateRandomValue = ()=>{
    return (Math.random() * 5 ) + 6;
}

const getData = ()=>{
    
    const data = [];

    for (let index = 0; index < generateRandomValue(); index++) {
        data.push({name: '', uv: generateRandomValue(), pv: 2400, amt: 2400})
    }

    return data
}

const CardCharts = (props) =>{
    const data = getData();

    return (
        <div className="cardCharts">
            <div className="header">
                <div className="container">
                    <div className="title">{props.title}</div>
                    <div className="btnDownload">
                        <IconButton>
                            <CloudDownloadIcon style={{color: "#b8b8b8"}} className="icon"/>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className="chart">
                <LineChart width={350} height={250} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#2c73d2" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    )
}

export default CardCharts