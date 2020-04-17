import React, { Component } from 'react';
import uuid from 'uuid/v4';

import { Element, Grid } from "../Grid";
import gridify from '../../../hoc/gridify';

class UngridifiedArticle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, ...otherProps } = this.props;
    return <div {...otherProps}>{children}</div>;
  }
}

export const Article = gridify(UngridifiedArticle, { componentName: 'Article' });