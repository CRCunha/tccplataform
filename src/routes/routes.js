
import React from 'react'

import Home from '../pages/Home/home'
import Data from '../pages/Data/data'
import Order from '../pages/Order/order'

import {BrowserRouter,Switch,Route}   from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true}   component={Home} />
            <Route path='/Order'           component={Order} />
            <Route path='/Data'           component={Data} />
        </Switch>
    </BrowserRouter>
)

export default Routes