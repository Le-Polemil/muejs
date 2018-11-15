import React, { Component } from 'react';
import './index.styl';

import { Grid, GridElement } from '../Grid';

export class Footer extends Component {
    render() {
        const { children, className, style, columnsTemplate, rowsTemplate, gap, rowGap, colGap, ...otherProps  } = this.props;
        return (
            <GridElement className={`footer ${className || ''}`} style={style} { ...otherProps }>
                <Grid columnsTemplate={columnsTemplate} rowsTemplate={rowsTemplate} gap={gap} rowGap={rowGap} colGap={colGap}>
                    { children }
                </Grid>
            </GridElement>
        );
    }
};

export * from './FooterItem';