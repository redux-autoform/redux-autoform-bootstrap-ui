import React from 'react';
import {Router} from 'react-router'
import routes from '../shared/routes/Routes';
import configureStore from '../shared/redux/store/Store';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router'
import ReactDOM from 'react-dom';
import numbro from 'numbro';
import moment from 'moment';
import { numbroLocalizer, momentLocalizer } from 'redux-autoform';

import 'babel-polyfill';

import './styles/Styles.less';

numbroLocalizer(numbro);
momentLocalizer(moment);

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);