import React, { Component } from 'react';
import './index.styl';

import { Grid } from '../Grid';

export class Footer extends Component {
    render() {
        const { children, className } = this.props;
        return React.createElement(Grid, { ...this.props, className: `footer ${className || ''}`, children });
    }
};

export * from './FooterItem';