import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Motion, spring } from 'react-motion';

import './stylesheet.scss';

// Default and closeSpring are in the constructor to depend on side of the drawer
const springToOpenTranslateX = spring(0, { stiffness: 220, damping: 20 });

const springToOpenOpacity = spring(1, { stiffness: 300, damping: 26 });
const springToClosedOpacity = spring(0, { stiffness: 300, damping: 26 });

export class Drawer extends Component {
  constructor(props) {
    super(props);
    this.drawerRoot = document.getElementById('drawer-root');
    this.state = { isOpen: true };

    this.defaultTranslateX = props.side === 'left' ? -100 : 100;
    this.springToClosedTranslateX = spring(this.defaultTranslateX, { stiffness: 220, damping: 26 });
  }

  handleClick() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    const { className, children, minWidth, maxWidth, side, onClose } = this.props;

    const drawer = (
      <Motion
        defaultStyle={{ x: this.defaultTranslateX, opacity: 0 }}
        style={{ x: isOpen ? springToOpenTranslateX : this.springToClosedTranslateX, opacity: isOpen ? springToOpenOpacity : springToClosedOpacity }}
        onRest={() => (!isOpen ? onClose() : null)}
      >
        {({ x, opacity }) => (
          <div role="presentation" className="drawer-black-bg" style={{ opacity }} onClick={() => this.handleClick()}>
            <div role="presentation" className={`artp-drawer ${side} ${className}`} style={{ minWidth, maxWidth, transform: `translateX(${x}%)` }} onClick={e => e.stopPropagation()}>
              { children }
            </div>
          </div>
        )}
      </Motion>
    );

    return createPortal(
      drawer,
      this.drawerRoot,
    );
  }
}
Drawer.defaultProps = {
  minWidth: '17.5vw',
  maxWidth: '75vw',
  side: 'left',
  className: '',
  children: <div>No children given</div>,
};
