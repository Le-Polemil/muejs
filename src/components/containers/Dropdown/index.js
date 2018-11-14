import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { Button } from '../../ui/Button';

import './index.styl';

const defaultTranslateX = 45;
const springToOpenTranslateX = spring(0, { stiffness: 220, damping: 20 });
const springToClosedTranslateX = spring(defaultTranslateX, { stiffness: 220, damping: 26 });

const springToOpenOpacity = spring(1, { stiffness: 300, damping: 26 });
const springToClosedOpacity = spring(0, { stiffness: 300, damping: 26 });

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isHidden: true };
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
  }

  handleClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen, isHidden: !prevState.isOpen ? false : prevState.isHidden }));
  }

  // ReactMotion's onRest doesn't re-render on this.setState
  handleRest() {
    if (!this.state.isOpen) {
      this.setState({ isHidden: true });
    }
  }

  handleClickOutside(e) {
    if (this.dropdownNode.contains(e.target)) return;
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, isHidden } = this.state;
    const { title = '', badgeComponent = null, children, style = {} } = this.props;

    const xSpring = isOpen ? springToOpenTranslateX : springToClosedTranslateX;

    return (
      <Motion
        defaultStyle={{ x: defaultTranslateX, opacity: 0 }}
        style={{ x: xSpring, opacity: isOpen ? springToOpenOpacity : springToClosedOpacity }}
        onRest={() => this.handleRest()}
      >
        {({ x, opacity }) => (
          <div className="dropdown-wrapper" ref={(node) => { this.dropdownNode = node; }}>
            <Button className="artp-dropdown" onClick={() => this.handleClick()}>
              <span style={style}>{title}{badgeComponent}</span> <i className="fa fa-caret-down" style={style} />
            </Button>
            { !isHidden && (
              <div className="artp-dropdown-menu" style={{ transform: `translateX(${x}%)`, opacity }}>
                {children}
              </div>
            )}
          </div>
        )}
      </Motion>
    );
  }
}
