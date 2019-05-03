import React from 'react';
import deepEqual from 'lodash.isequal';
import { Grid } from '../Grid';
import gridify from '../../../hoc/gridify';

import './index.styl';



const UngridifiedForm = ({ children, columnsTemplate, rowsTemplate, gap, rowGap, colGap, gridClassName, ...otherProps }) => (
  <form {...otherProps}>
    <Grid columnsTemplate={columnsTemplate} rowsTemplate={rowsTemplate} gap={gap} rowGap={rowGap} colGap={colGap} className={gridClassName}>
      { children }
    </Grid>
  </form>
);


export const Form = gridify(UngridifiedForm, { componentName: 'form' });
