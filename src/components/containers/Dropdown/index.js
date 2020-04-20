import React, { Component } from 'react'

import './index.styl'

export class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.close = this.close.bind(this)
  }

  close() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false)
  }

  handleClick() {
    this.close()
  }

  handleClickOutside(e) {
    if (!this.state.isOpen || this.dropdownNode && this.dropdownNode.contains(e.target)) return null
    this.setState({ isOpen: false })
  }

  render() {
    const { isOpen } = this.state
    const { title = '', detached = false, side = 'left', badgeComponent = null, trigger, renderChildren, style = {}, contentStyle } = this.props

    return (
      <div className="dropdown-wrapper" ref={(node) => { this.dropdownNode = node }}>
        <button className="dropdown-trigger" onClick={this.handleClick}>
          { trigger || (
            <>
              <span style={style}>{title}{badgeComponent}</span>
              <i className="ml-10 fa fa-caret-down" style={style} />
            </>
          )}
        </button>
        { isOpen && (
          <div className={`dropdown-menu ${side ? side : ''} ${detached ? 'detached' : ''}`.trim()} style={contentStyle}>
            {typeof renderChildren === 'function' && renderChildren({ close: this.close })}
          </div>
        )}
      </div>
    )
  }
}
