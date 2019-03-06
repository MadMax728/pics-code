import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorlogPage from './Errorlog';
import HistorylogPage from './Historylog';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HistorylogPage} />
        <Route exact path='/Errorlog' component={ErrorlogPage} />
    </Switch>
)

export default Router;