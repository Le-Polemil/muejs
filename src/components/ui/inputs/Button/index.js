import React from 'react';

import gridify from '../../../../hoc/gridify';

import './index.styl';

const UngridifiedButton = ({ children, className = '', size = '', icon, text, ...otherProps }) => {
    const classNames = ['btn', size, className].filter(e => !!e).join(' ');
    return (
        <button className={classNames} {...otherProps}>
            { (text !== undefined) ?
                <span>{ icon && <i className="material-icons">{icon}</i> }{ text.toUpperCase() }</span> :
                children
            }
        </button>
    );
}

export const Button = gridify(UngridifiedButton);
export default UngridifiedButton;