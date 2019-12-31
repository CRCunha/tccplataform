import React from 'react';

import NavBar from '../../components/NavBar/NavBar'
import CardCharts from '../../components/CardChards/cardCharts'

import './home.css'

const Home = () => (
    <div className="home">
        <NavBar />
        <div className="content">
            <div className="container" id="Custonbar">
                <CardCharts title="Chart 1"/>
                <CardCharts title="Chart 2"/>
                <CardCharts title="Chart 3"/>
                <CardCharts title="Chart 4"/>
                <CardCharts title="Chart 5"/>
                <CardCharts title="Chart 6"/>
            </div>
        </div>
    </div>
)

export default Home