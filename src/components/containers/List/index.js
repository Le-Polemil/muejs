import React, { Component } from 'react';

import { Grid } from "../Grid";
import gridify from '../../../hoc/gridify';


class UngridifiedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, ...otherProps } = this.props;
    return (
      <Grid { ...otherProps }>
        { children }
      </Grid>
    );
  }
}

export const List = gridify(UngridifiedList, { forcedProps: { fullwidth: true }, componentName: 'List' });