import React, { Component } from 'react';
import gridify from '../../../hoc/gridify';

import './index.styl';

export class UngridifiedScreen extends Component {
    render() {
        const { navHeight, style, children, ...otherProps } = this.props;

        return <div style={{ height: `calc(100vh - ${navHeight})`, ...style }} {...otherProps}>{ children }</div>;
    }
}

export const Screen = gridify(UngridifiedScreen, { forcedProps: { fullwidth: 'true' }, componentName: 'screen' });
