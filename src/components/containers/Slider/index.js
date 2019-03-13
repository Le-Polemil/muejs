import React, { Component } from 'react';
import uuid from 'uuid/v4';
import gridify from "../../../hoc/gridify";

import { Icon } from "../../ui/Icon";


import './index.styl';

export default class UngridifiedSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { id: uuid(), activeSlide: props.start || 0 }
    }


    handleLeftArrow() {
        const mod = this.props.children.length - 1;

        this.setState(prevState => ({ activeSlide: (prevState.activeSlide - 1 >= 0) ? prevState.activeSlide - 1 : mod }));
    }

    handleRightArrow() {
        const mod = this.props.children.length;
        this.setState(prevState => ({ activeSlide: (prevState.activeSlide + 1) % mod }));

    }


    renderChildren() {
        const { children } = this.props;
        const { id, activeSlide } = this.state;

        return React.Children.map(children, (child, index) => {
            let distance = index - activeSlide;
            if (Math.abs(distance) === children.length - 1) distance = -Math.sign(distance);

            const classNames = [child.props.className, 'slider-item', (Math.abs(distance) > 1) ? 'opacity-0' : ''].filter(e => !!e).join(' ');

            const styles = { ...child.props.style };

            styles['zIndex'] = children.length - Math.abs(distance);

            styles['transform'] = `translateX(${(distance) * 100}%)`;

            return React.cloneElement(child, { key: id, className: classNames, style: styles });
        });
    }

    render() {
        const { children, loop = "true", ...otherProps } = this.props;
        const { id, activeSlide } = this.state;


        return (
            <div { ...otherProps }>

                { (loop === "true" || activeSlide > 0) && (
                    <Icon
                        onClick={() => this.handleLeftArrow()}
                        position="absolute"
                        className="left-arrow lg"
                        style={{ zIndex: children.length + 1 }}
                    >
                        keyboard_arrow_left
                    </Icon>
                ) }

                <div id={id} className="slider-wrapper">
                    { this.renderChildren() }
                </div>

                { (loop === "true" || activeSlide < children.length - 1) && (
                    <Icon
                        onClick={() => this.handleRightArrow()}
                        position="absolute"
                        className="right-arrow lg"
                        style={{ zIndex: children.length + 1 }}
                    >
                        keyboard_arrow_right
                    </Icon>
                ) }

            </div>
        );
    }
}


export const Slider = gridify(UngridifiedSlider, { forcedProps: { fullwidth: 'true' }, componentName: 'slider' });