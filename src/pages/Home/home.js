import React from 'react';

import NavBar from '../../components/NavBar/NavBar'

import './home.css'

import business from '../../assets/img/logo.png'

const Home = () => (
    <div className="home">
        <NavBar />
        <div className="content" id="Custonbar">
            <div className="left">
                <div className="title"></div>
            </div>
            <div className="right">
                <div className="container">
                    <img src={business} alt="business" />
                    <div className="name">PLOTZ</div>
                </div>
            </div>
        </div>
    </div>
)

export default Home