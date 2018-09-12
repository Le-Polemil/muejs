import React from 'react';
import './index.styl';

const Button = ({ onClick, children, className = '', icon = '', disabled = false, text = '' }) => (
    <button className={`artp-btn ${className}`} disabled={disabled} onClick={onClick} >
        { text ?
            <span>{ icon !== '' && <i className={`fa fa-${icon}`} /> }{ text.toUpperCase() }</span> :
            children
        }
    </button>
);

export default Button;