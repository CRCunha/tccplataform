import React from 'react';

import NavBar from '../../components/NavBar/NavBar'
import FilterCard from '../../components/FilterCard/FilterCard'

import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Snackbar from '@material-ui/core/Snackbar';
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

const Order = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return(
        <div className="order" onLoad={handleOpen}>
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
                            <TableHead id='head'>
                                <TableRow>
                                    <TableCell id='headContent'>Dessert (100g serving)</TableCell>
                                    <TableCell id='headContent' align="right">Calories</TableCell>
                                    <TableCell id='headContent' align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell id='headContent' align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell id='headContent' align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody> 
                                {rows.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell id="table" component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell id="table" align="right">{row.calories}</TableCell>
                                        <TableCell id="table" align="right">{row.fat}</TableCell>
                                        <TableCell id="table" align="right">{row.carbs}</TableCell>
                                        <TableCell id="table" align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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

export default Order