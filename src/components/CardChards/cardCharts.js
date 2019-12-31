import React from 'react'
import './cardCharts.css'

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import IconButton from '@material-ui/core/IconButton';

const CardCharts = (props) => (
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
    </div>
)

export default CardCharts