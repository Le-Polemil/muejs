import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

import './stylesheet.scss';

const stopPropagation = e => e.stopPropagation();

const springToOpenMargin = spring(0, { stiffness: 225, damping: 20 });
const springToClosedMargin = spring(100, { stiffness: 275, damping: 26 });

const springToOpenOpacity = spring(1, { stiffness: 250, damping: 20 });
const springToClosedOpacity = spring(0, { stiffness: 300, damping: 26 });

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = { open: true };
    this.modalRoot = document.getElementById('modal-root');
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const { title, content, children, width, height, noheadbar, fitted, onClose } = this.props;

    const contentClassName = `artp-modal-content ${fitted ? 'fitted' : ''}`;

    const modal = (
      <Motion
        defaultStyle={{ marginTop: 100, opacity: 0 }}
        style={{ marginTop: open ? springToOpenMargin : springToClosedMargin, opacity: open ? springToOpenOpacity : springToClosedOpacity }}
        onRest={() => (!open ? onClose() : null)}
      >
        {({ marginTop, opacity }) => (
          <div role="presentation" className="modal-black-bg" style={{ opacity }} onClick={() => this.handleClose()}>
            <div role="presentation" className="artp-modal" style={{ width, maxHeight: height, marginTop: `${marginTop}%` }} onClick={stopPropagation}>

              <div className={`artp-modal-header ${noheadbar ? 'noheadbar' : ''}`}>
                { !noheadbar && <a className="clickable-icon" role="presentation" onClick={() => this.handleClose()} title="Hide"><i className="fa fa-times" /></a> }
                <h2 className="fixed-gridcol-2">{title}</h2>
              </div>

              { content ?
                <div className={contentClassName} dangerouslySetInnerHTML={{ __html: content }} /> :
                <div className={contentClassName}>{ children }</div>
              }

            </div>
          </div>
        )}
      </Motion>
    );

    return createPortal(
      modal,
      this.modalRoot,
    );
  }
}
Modal.defaultProps = {
  width: '100%',
  height: '100%',
  title: '',
  content: null,
  children: <div>No children nor content given</div>,
  noheadbar: false,
  fitted: false,
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  // eslint-disable-next-line
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  width: PropTypes.string,
  height: PropTypes.string,
  noheadbar: PropTypes.bool,
  fitted: PropTypes.bool,
};

export default Modal;
