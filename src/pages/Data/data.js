import React from 'react';

import NavBar from '../../components/NavBar/NavBar'
import CardCharts from '../../components/CardChards/cardCharts'

import Snackbar from '@material-ui/core/Snackbar';

import './data.css'

const Data = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return(
        <div className="data" onLoad={handleOpen}>
            <NavBar />
            <div className="content" id="Custonbar">
            <div className="titleData">General Infos</div>
                <div className="container" >
                    <CardCharts title="SKU"/>
                    <CardCharts title="LOJA"/>
                    <CardCharts title="ORDEDR"/>
                    <CardCharts title="STOQUE"/>
                    <CardCharts title="DAMAND"/>
                    <CardCharts title="TRANSITO"/>
                </div>
            </div>
            <Snackbar 
                open={open} 
                autoHideDuration={6000}  
                message="In Progress" 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            />
        </div>
    )
}

export default Data