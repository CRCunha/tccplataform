import React from 'react'
import './navBar.css'

//Assets
import logo from '../../assets/img/logo.png'

//Icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EqualizerIcon from '@material-ui/icons/Equalizer';

//Router
import { Link } from 'react-router-dom'

const NavBar = () => (
    <div className="navBar">
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="menu">
            <div className="container">
                <Link to="/">
                    <div className="btnMenu">
                        <HomeIcon/>
                    </div>
                </Link>
                <Link to="/Order">
                    <div className="btnMenu">
                        <TrendingUpIcon/>
                    </div>
                </Link>
                <Link to="/Data">
                    <div className="btnMenu">
                        <EqualizerIcon/>
                    </div>
                </Link>
            </div>
        </div>
        <div className="logoutContainer">
            <ExitToAppIcon/>
        </div>
    </div>
)

export default NavBar