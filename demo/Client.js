import React from 'react';
import {Router} from 'react-router'
import routes from './Routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router'
import {render} from 'react-dom';
import moment from 'moment';
import numbro from 'numbro';
import reactWidgetsMomentLocalizer from 'react-widgets/lib/localizers/moment';
import momentLocalizer from 'redux-autoform-utils/lib/localization/momentLocalizer';
import numbroLocalizer from 'redux-autoform-utils/lib/localization/numbroLocalizer';

import './less/styles.less';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// setting date localizer
reactWidgetsMomentLocalizer(moment);
momentLocalizer(moment);

// setting number localizer
numbroLocalizer(numbro);

render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('#app_container')
);    