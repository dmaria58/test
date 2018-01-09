import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import Page1 from './Component/Page1';
import './Style/app.less';
import './Style/test.less';

render(
    <div className="red">
    23423 2342
        <Page1 />
    </div>,
    document.body.appendChild(document.createElement('div'))
);

