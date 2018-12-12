import React, { Component } from 'react';
import Button from '../Button/index';

import './index.styl';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.handleClickOutside.bind(this);
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
    }

    handleClick() {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    handleClickOutside(e) {
        if (this.dropdownNode.contains(e.target)) return;
        this.setState({ isOpen: false });
    };

    render() {
        const { title, children, style = {}, badgeComponent = undefined } = this.props;
        console.log(style);
        return (
            <div className="dropdown-wrapper" ref={(node) => { this.dropdownNode = node; }}>
                <Button className="artp-dropdown" onClick={() => this.handleClick()}>
                    <span style={style}>{title}{badgeComponent}</span> <i className="fa fa-caret-down" style={style} />
                </Button>
                { this.state.isOpen && (
                    <div className="artp-dropdown-menu">
                        {children}
                    </div>
                )}
            </div>
        );
    }
}

export default Dropdown;