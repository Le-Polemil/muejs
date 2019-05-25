import React, { Component } from 'react';
import gridify from '../../../../hoc/gridify';

export class UngridifiedElement extends Component {
    render() {
        const { children, fill, className, type: Component, ...otherProps } = this.props;
        const classNames = [className, fill ? "fill" : ""].join(' ').trim();
        return Component ?
               <Component className={classNames} {...otherProps}>{ children }</Component> :
               <div className={classNames} {...otherProps}>{ children }</div>;
    }
}
UngridifiedElement.displayName = 'GridElement';

export const Element = gridify(UngridifiedElement);



export const Row = gridify(UngridifiedElement, { componentName: 'Row', forcedProps: { fullwidth: 'true' }});
