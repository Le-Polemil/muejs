import React from 'react';
import Grid from '../../../containers/Grid';
import Spinner from './CircularProgress';

const FullPageSpinner = (props) => (
  <Grid rowsTemplate="100vh" columnsTemplate="100vw" className="align-center justify-center" {...props}>
    <Spinner />
  </Grid>
);

export default FullPageSpinner;
