import React from 'react';
import './index.styl';
import gridify from "../../../hoc/gridify";

const UngridifedButton = ({ className = null, icon = null, type = 'button', disabled = false, onClick = null, text = null, children = <span>No children given</span> }) => (
    <button type={!onClick && !type ? 'submit' : type} className={`artp-btn${className ? className : ''}`} disabled={disabled} onClick={onClick} >
        { text ?
            <span className="btn-label">{ icon && <i className="material-icons">{icon}</i> }{ text.toUpperCase() }</span> :
            children
        }
    </button>
);

export default UngridifedButton;

export const Button = gridify(UngridifedButton, { componentName: 'button' });