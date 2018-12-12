import React from 'react';
import './index.styl';

export const Button = ({ className = null, icon = null, type = 'button', disabled = false, onClick = null, text = null, children = <span>No children given</span> }) => (
    <button type={!onClick && !type ? 'submit' : type} className={`artp-btn${className ? className : ''}`} disabled={disabled} onClick={onClick} >
        { text ?
            <span className="btn-label">{ icon && <i className="material-icons">{icon}</i> }{ text.toUpperCase() }</span> :
            children
        }
    </button>
);
