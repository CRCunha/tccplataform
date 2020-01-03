import React from 'react';

import NavBar from '../../components/NavBar/NavBar'
import FilterCard from '../../components/FilterCard/FilterCard'

import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// import IconButton from '@material-ui/core/IconButton';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './order.css'

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const Order = () => (
    <div className="order">
        <NavBar />
        <div className="content">
            <div className="filtros">
                <div className="tooltipContainer">
                    <Tooltip className="tooltip" title="Os filtros são responsáveis por aplicar mudanças nas tableas" placement="right"> 
                        <InfoOutlinedIcon />
                    </Tooltip>
                </div>
                <div className="filtersContainer">
                    <FilterCard filter="Filter" />
                    <FilterCard filter="Family"/>
                </div>
            </div>
            <div className="tables">
                {/* <div className="tableHeader">
                    <div className="container">
                        <div className="title">TABLE</div>
                        <div className="download"><IconButton><CloudDownloadIcon style={{color: "#b8b8b8"}}/></IconButton></div>
                    </div>
                </div> */}
                <TableContainer className="tableContent" id="Custonbar" component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </div>
)

export default Order