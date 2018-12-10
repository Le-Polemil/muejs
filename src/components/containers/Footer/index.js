import React, { Component } from 'react';
import './index.styl';

import { Grid } from '../Grid';
import gridify from '../../../hoc/gridify';

export class UngridifiedFooter extends Component {
    render() {
        const { children, ...otherProps  } = this.props;
        return (
            <Grid {...otherProps}>
                { children }
            </Grid>
        );
    }
};


export const Footer = gridify(UngridifiedFooter, { forcedProps: { fullwidth: 'true', selfRowTemplate: 'fit-content(100%)' }, componentName: 'Footer' });

export * from './FooterItem';