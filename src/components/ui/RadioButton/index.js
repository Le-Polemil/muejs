import React, { Fragment } from 'react';
import { Motion, spring } from 'react-motion';
import uuidv4 from 'uuid/v4';

import './index.styl';

const totalLength = 72.7977294921875;
const circleLength = 50.24085998535156;
const checkedLength = -22.55687141418457;

const defaultSpring = -totalLength;
const circleSpring = spring(circleLength, { stiffness: 150, damping: 18 });

const RadioButton = (props) => {
    const { id = (props.name && props.value) ? `${props.name}-${props.value}` : uuidv4(), name = 'radiobutton', disabled = false, value = id, onChange, checked = null, label = null } = props;
    return (
        <span>
            <label htmlFor={id} className="radiobutton"
                   style={{color: checked ? '#7ca728' : 'rgb(119, 165, 255)', transition: 'color 0.8s'}}>
                <svg className="svg-container" viewBox="0 0 24 24">
                    <g className="svg-radiobutton">
                        <Motion
                            defaultStyle={{offset: defaultSpring}}
                            style={{offset: checked ? circleSpring : checkedLength}}
                        >
                            {({offset}) => (
                                <path
                                    strokeDasharray={`${totalLength} ${totalLength}`}
                                    strokeDashoffset={checked ? offset : checkedLength}
                                    d="
                                      M 18.5 5.2
                                      L 7.8 15.8 2.5 10.5
                                      c 0-4.4 3.6-8 8-8
                                      s 8 3.6 8 8-3.6 8-8 8-8-3.6-8-8"
                                />
                            )}
                        </Motion>
                    </g>
                </svg>
            { label && <span className="radiobutton-label">{ label }</span> }
            </label>
            <input className="hidden" type="radio" name={name} id={id} value={value !== null ? value : id} checked={checked} disabled={disabled} onChange={onChange}/>
        </span>
    )
};
export default RadioButton;