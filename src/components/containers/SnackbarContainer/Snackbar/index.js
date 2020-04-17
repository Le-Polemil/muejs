import React from 'react';
import { Motion, spring } from 'react-motion';

import './index.styl';

const defaultLeft = -100;
const openedLeft = 0;
const springLeft = spring(openedLeft, { stiffness: 200, damping: 16 });
const springDefault = spring(defaultLeft, { stiffness: 300, damping: 30 });

export class Snackbar extends React.Component {
  constructor(props) {
    super(props);
    this.timeoutId = null;
    this.state = { open: true };
  }

  componentDidMount() {
    const { autoHideDuration = 5000, onClose } = this.props;
    if (autoHideDuration > 0 && onClose) {
      this.timeoutId = setTimeout(() => this.handleClose(), autoHideDuration);
    }
  }

  componentWillUnmount() {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
    }
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const { onClose = null, message = 'Notification', action = [], describedBy = null } = this.props;
    return (
      <Motion
        defaultStyle={{ left: defaultLeft }}
        style={{ left: open ? springLeft : springDefault }}
        onRest={() => (!open ? onClose() : null)}
      >
        {({ left }) => (
          <div className="snackbar" style={{ left: `${left}%` }} aria-describedby={describedBy}>
            {message}
            {action.length > 0 && action.map(button => button)}
            <a className="close-icon" role="presentation" title="Hide" aria-label="Close" onClick={() => this.handleClose()}>
              <i className="fa fa-times" />
            </a>
          </div>
        )}
      </Motion>
    );
  }
}