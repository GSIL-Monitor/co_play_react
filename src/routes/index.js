import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import Authority from '../views/Authority/ErrorView';
import Page404 from 'views_path/ErrorPages/Page404';
import {PAGE_ROUTE} from 'utils_path/constants';
module.exports = (
    <Router history={ browserHistory }>
        <Route path='/' component={CoreLayout}>

            {/* 首页 */}
            <IndexRoute getComponent={(location, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../views/Website/index'));
                });
            } } />
            {/* 业务类型配置 */}
            <Route path={PAGE_ROUTE.website} getComponent={(location, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../views/Website/index'));
                });
            } } />
            
            
        </Route>
        <Route path="/authority/control" component={ Authority }/>
        <Route path="*" component={ Page404 } />
    </Router>
);