import React, { Component } from 'react';
import gridify from '../../../../hoc/gridify';

export class UngridifiedElement extends Component {
    render() {
        const { children, type: Component, ...otherProps } = this.props;
        return Component ?
               <Component {...otherProps}>{ children }</Component> :
               <div {...otherProps}>{ children }</div>;
    }
}
UngridifiedElement.displayName = 'GridElement';

export const Element = gridify(UngridifiedElement);



export const Row = gridify(UngridifiedElement, { componentName: 'Row', forcedProps: { fullwidth: 'true' }});