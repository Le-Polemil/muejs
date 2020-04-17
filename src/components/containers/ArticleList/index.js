import React, { Component } from 'react';
import {GridElement} from "../Grid/GridElement";
import {Grid} from "../Grid";

export class ArticleList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { col, width, row, height, className, ...otherProps } = this.props;
        return (
            <GridElement col={col} row={row} width={width} height={height} className="article-list">
                <Grid className={className ? className : ''} {...otherProps}>
                    <GridElement className="bg-error">
                        Bonjour X
                    </GridElement>
                    <GridElement className="bg-succes">
                        Bonjour X
                    </GridElement>
                </Grid>
            </GridElement>
        )

    }
}
