import React, { Component } from 'react';
import uuid from 'uuid/v4';
import gridify from "../../../hoc/gridify";

import './index.styl';
import { UngridifiedScreen } from "../Screen";

export default class UngridifiedSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { id: uuid(), activeSlide: props.defaultSlide || 0 }
    }

    renderChildren() {
        const { children } = this.props;
        const { id, activeSlide } = this.state;


        return React.Children.map(children, (child, index) => {
            const classNames = [child.props.className, 'slider-item', index === activeSlide ? 'active' : ''].filter(e => !!e).join(' ');
            return React.cloneElement(child, { key: id, className: classNames, col: index + 1, row: 1 });
        });
    }

    render() {
        const { children, ...otherProps } = this.props;
        return (
            <div { ...otherProps }>
                { this.renderChildren() }
            </div>
        );
    }
}


export const Slider = gridify(UngridifiedSlider, { forcedProps: { fullWidth: 'true' }, componentName: 'slider' });