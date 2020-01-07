import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import './home.css'
import business from '../../assets/img/logo.png'
import IFLogo from '../../assets/img/ifsul.png'
import TSILogo from '../../assets/img/tsi.png'
import Elixir from '../../assets/img/elixir.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Carousel from 're-carousel'

const Home = () => (
    <div className="home">
        <NavBar />
        <div className="content" id="Custonbar">
            <div className="left">
                <div className="container">
                    <Carousel loop auto interval={3000} transitionTime className="Carrosel">
                        <LazyLoadImage alt='logo' src={IFLogo} effect="blur"  width='55%' className="imagem"/>
                        <LazyLoadImage alt='logo' src={TSILogo} effect="blur"  width='55%' className="imagem"/>
                        <LazyLoadImage alt='logo' src={Elixir} effect="blur"  width='55%' className="imagem"/>
                    </Carousel>
                </div>
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