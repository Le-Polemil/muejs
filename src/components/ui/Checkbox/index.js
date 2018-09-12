import React, { Component, Fragment } from 'react';
import { Motion, spring } from 'react-motion';
import uuidv4 from 'uuid/v4';

import './index.styl';

const squareLength = 50.235;
const checkedLength = 21.9;
const undeterminedLength = 18;
const totalLength = squareLength + checkedLength + undeterminedLength;

const animationOption = { stiffness: 200, damping: 24.5 };

const squareSpringDash = spring(squareLength, animationOption);
const checkedSpringDash = spring(checkedLength, animationOption);
const undeterminedSpringDash = spring(undeterminedLength, animationOption);

const undeterminedSpringOffset = spring(-checkedLength - squareLength, animationOption);
const squareSpringOffset = spring(-checkedLength, animationOption);
const checkedSpringOffset = spring(0, animationOption);

class Checkbox extends Component {
    constructor(props) {
        super(props);
        const { defaultChecked = null, onChange = null } = this.props;
        this.state = { inputIsChecked: defaultChecked, undetermined: !defaultChecked };
        this.onChange = onChange;
    }

    handleChange (e) {
        this.setState({ inputIsChecked: e.target.checked, undetermined: false });
        if (this.onChange) this.onChange(e);
    };

    render() {
        const { inputIsChecked, undetermined } = this.state;
        const { name = 'checkbox', id = uuidv4(), disabled = false, value = id, defaultChecked = null } = this.props;

        let offsetSpring = undeterminedSpringOffset;
        let dashArraySpring = undeterminedSpringDash;
        if (!undetermined) {
            offsetSpring = inputIsChecked ? checkedSpringOffset : squareSpringOffset;
            dashArraySpring = inputIsChecked ? checkedSpringDash : squareSpringDash;
        }

        console.log(<input className="input-hidden" type="checkbox" defaultChecked={defaultChecked} name={name} id={id} value={value} disabled={disabled} onChange={(e) => this.handleChange(e)} />);

        return (
            <Fragment>
                <input className="input-hidden" type="checkbox" defaultChecked={defaultChecked} name={name} id={id} value={value} disabled={disabled} onChange={(e) => this.handleChange(e)} />
                <label htmlFor={id} className="checkbox" style={{ color: (undetermined && '#aaa') || (inputIsChecked ? '#7ca728' : ''), transition: 'color 0.6s' }}>
                    <svg className="svg-container" viewBox="0 0 24 24">
                        <g className="svg-checkbox">
                            <Motion
                                defaultStyle={{ offset: -totalLength, dashArray: totalLength }}
                                style={{ offset: offsetSpring, dashArray: dashArraySpring }}
                            >
                                {({ offset, dashArray }) => (
                                    <path
                                        strokeDasharray={`${dashArray} ${totalLength}`}
                                        strokeDashoffset={offset}
                                        d="M 20 4.2
                                        L 9.3 14.8
                                        4 10.5
                                        4 3.5
                                        16 3.5
                                        16 16.5
                                        4 16.5
                                        4 10.25
                                        16 10.25"
                                    />
                                )}
                            </Motion>
                        </g>
                    </svg>
                </label>
            </Fragment>
        );
    }
}

export default Checkbox;
