import React from 'react';

import NavBar from '../../components/NavBar/NavBar'

import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import './home.css'

const data = [
    {name: '01/20', uv: 400, pv: 2400, amt: 2400},
    {name: '02/20', uv: 800, pv: 2400, amt: 2400},
    {name: '03/20', uv: 900, pv: 2400, amt: 2400},
    {name: '04/20', uv: 1200, pv: 2400, amt: 2400},
    {name: '05/20', uv: 900, pv: 2400, amt: 2400},
    {name: '06/20', uv: 1300, pv: 2400, amt: 2400},
    {name: '07/20', uv: 1400, pv: 2400, amt: 2400},
    {name: '08/20', uv: 1600, pv: 2400, amt: 2400},
    {name: '09/20', uv: 1700, pv: 2400, amt: 2400},
];

const Home = () => (
    <div className="home">
        <NavBar />
        <div className="content" id="Custonbar">
        <div className="titleHome">Home</div>
            <div className="container" >
                <div className="left"></div>
                <div className="right">
                    <AreaChart id="chart" width={820} height={460} data={data}>
                        <XAxis dataKey="name" stroke="#7464c8" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Area type="monotone" dataKey="uv" fill="#2c73d29e" barSize={30} />
                    </AreaChart>
                </div>
            </div>
        </div>
    </div>
)

export default Home