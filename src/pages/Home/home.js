import React from 'react';

import NavBar from '../../components/NavBar/NavBar'

import './home.css'

const Home = () => (
    <div className="home">
        <NavBar />
        <div className="content" id="Custonbar">
        <div className="titleHome">Home</div>
            <div className="container" >
                <div className="left"></div>
                <div className="right"></div>
            </div>
        </div>
    </div>
)

export default Home