import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import './Style/app.less';
import './Style/test.less';

render(
    <div className="red">
        hello 234233453234532
    </div>,
    document.body.appendChild(document.createElement('div'))
);

