import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import './home.css'
import business from '../../assets/img/logo.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => (
    <div className="home">
        <NavBar />
        <div className="content" id="Custonbar">
            <div className="left">
                <div className="title"></div>
            </div>
            <div className="right">
                <div className="container">
                    <LazyLoadImage alt='logo' src={business} effect="blur" width='25%' className="imagem"/>
                    <div className="name">PLOTZ</div>
                </div>
            </div>
        </div>
    </div>
)

export default Home