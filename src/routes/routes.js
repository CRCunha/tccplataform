
import React from 'react'

import Home from '../pages/Home/home'
import Order from '../pages/Order/order'

import {BrowserRouter,Switch,Route}   from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true}   component={Home} />
            <Route path='/Order'           component={Order} />
        </Switch>
    </BrowserRouter>
)

export default Routes