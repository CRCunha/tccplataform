import React from 'react';

import NavBar from '../../components/NavBar/NavBar'
import CardCharts from '../../components/CardChards/cardCharts'

import './home.css'

const Home = () => (
    <div className="home">
        <NavBar />
        <div className="content">
            <div className="container" id="Custonbar">
                <CardCharts title="SKU"/>
                <CardCharts title="LOJA"/>
                <CardCharts title="ORDEDR"/>
                <CardCharts title="STOQUE"/>
                <CardCharts title="DAMAND"/>
                <CardCharts title="TRANSITO"/>
            </div>
        </div>
    </div>
)

export default Home