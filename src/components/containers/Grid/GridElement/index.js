import React, { Component } from 'react';
import gridify from '../../../../hoc/gridify';

export class BasicElement extends Component {
    render() {
        const { children, ...otherProps } = this.props;
        return <div {...otherProps}>{ children }</div>;
    }
}
BasicElement.displayName = 'GridElement';

export const Element = gridify(BasicElement);

export const Row = gridify(BasicElement, { componentName: 'Row', forcedProps: { fullwidth: 'true' }});