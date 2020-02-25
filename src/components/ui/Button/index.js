import React from 'react';
import './index.styl';
import gridify from "../../../hoc/gridify";

const UngridifedButton = ({ aspect = 'filled', icon = null, type = 'button', disabled = false, onClick = null, text = null, children = <span>No children given</span>, className = '', ...otherProps }) => (
    <button className={[aspect, className].filter(e => !!e).join(' ')} type={!onClick && !type ? 'submit' : type} disabled={disabled} onClick={onClick} {...otherProps}>
        { text ?
            <span className="btn-label justify-center">{ icon && <i className="material-icons mr-5">{icon}</i> }{ text.toUpperCase() }</span> :
            children
        }
    </button>
);

export default UngridifedButton;

export const Button = gridify(UngridifedButton, { componentName: 'btn' });
