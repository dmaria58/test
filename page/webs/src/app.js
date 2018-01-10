import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import RouteConfig from './Router/Route'; //路由配置
import store from './Redux/Store/index';

import './Style/app.less';
render(
    <Provider store={store}>
        <RouteConfig />
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);
