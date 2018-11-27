import React, { Component } from 'react';
import './index.styl';

import { Grid } from '../Grid';
import gridify from '../../../hoc/gridify';

export class UngridifiedFooter extends Component {
    render() {
        const { children, columnsTemplate, rowsTemplate, gap, rowGap, colGap, ...otherProps  } = this.props;
        return (
            <Grid {...otherProps} columnsTemplate={columnsTemplate} rowsTemplate={rowsTemplate} gap={gap} rowGap={rowGap} colGap={colGap}>
                { children }
            </Grid>
        );
    }
};


export const Footer = gridify(UngridifiedFooter, { forcedProps: { fullwidth: 'true', selfRowTemplate: 'fit-content(100%)' }, componentName: 'footer' });

export * from './FooterItem';