import React from 'react';
import AppContainer from './containers/AppContainer';
import Demo from './pages/Demo.js';

import { Route, Redirect } from 'react-router';

export default (
    <Route component={AppContainer}>
        <Route path="/redux-autoform-bootstrap-ui/demo.html" component={Demo}/>
        <Redirect from="*" to="/redux-autoform-bootstrap-ui/demo.html" />
    </Route>
);
