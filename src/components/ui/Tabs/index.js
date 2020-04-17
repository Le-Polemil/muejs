import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab/index';

import './stylesheet.scss';

class Tabs extends Component {
  constructor(props) {
    super(props);
    const children = Array.isArray(props.children) ? props.children : [props.children];
    this.initialValue = props.initialValue;
    this.state = { current: this.initialValue || (children && children[0].props.value) || null };
  }

  changeTab(value) {
    this.setState({ current: value || this.initialValue });
    this.props.onChange(value);
  }

  renderChildren() {
    const { current } = this.state;
    const { onChange, children } = this.props;

    return React.Children.map(children, (child, index) => {
      const { value, label } = child.props;
      const isCurrent = current === null && index === 1 ? true : (value === current);

      return (child instanceof Tab) ?
        React.cloneElement(child, { onClick: onChange, current: isCurrent }) :
        <Tab key={value} value={value} label={label} onClick={e => this.changeTab(e.currentTarget.value)} current={isCurrent}>{ child }</Tab>;
    });
  };

  render() {
    const { children } = this.props;

    if (!children) return null;
    return <div>{ this.renderChildren() }</div>;
  }
}

export default Tabs;
