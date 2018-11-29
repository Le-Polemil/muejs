import React, { Component } from 'react';
import gridify from '../../../../hoc/gridify';

export class UngridifiedElement extends Component {
    render() {
        const { children, ...otherProps } = this.props;
        return <div {...otherProps}>{ children }</div>;
    }
}
UngridifiedElement.displayName = 'GridElement';

export const Element = gridify(UngridifiedElement);

export const Row = gridify(UngridifiedElement, { componentName: 'Row', forcedProps: { fullwidth: 'true' }});