import React, { Component } from 'react';
import { Grid, GridElement, Row } from '../../Grid/index';

export class FooterList extends Component {
    static renderChildren (children) {
        return children.map((child, index) => {
            return <GridElement className='list-item' key={`${child.name}#${index}`} row={index + 1}>{ child }</GridElement>;
        });
    }
    render() {
        const { children, className, columnsTemplate, rowsTemplate, gap, rowGap, colGap, ...otherProps } = this.props;
        return (
            <GridElement { ...otherProps } className={`footer-list ${className || ''}`}>
                <Grid columnsTemplate={columnsTemplate} rowsTemplate={rowsTemplate} gap={gap} rowGap={rowGap} colGap={colGap}>
                    { FooterList.renderChildren(children) }
                </Grid>
            </GridElement>
        );
    }
}

export class FooterLine extends Component {
    static renderChildren (children) {
        return children.map((child, index) => {
            return <GridElement className='line-item' key={`${child.name}#${index}`} col={index + 1}>{ child }</GridElement>;
        });
    }
    render() {
        const { children, className, columnsTemplate, rowsTemplate, gap, rowGap, colGap, ...otherProps } = this.props;
        return (
            <GridElement fullwidth { ...otherProps } className={`footer-line ${className || ''}`}>
                <Grid columnsTemplate={columnsTemplate} rowsTemplate={rowsTemplate} gap={gap} rowGap={rowGap} colGap={colGap}>
                    { FooterLine.renderChildren(children) }
                </Grid>
            </GridElement>
        );
    }
}

export class FooterSeparator extends Component {
    render() {
        return <GridElement {...this.props} className="footer-separator" />;
    }
}