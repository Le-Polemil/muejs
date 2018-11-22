import React, { Component } from 'react';
import uuid from 'uuid/v4';

import context from '../../../store/context/Grids';
import { updateGridAction } from '../../../store/actions/Grids';

import './index.styl';


export class Grid extends Component {
    constructor (props) {
        super(props);
        this.getStyle = this.getStyle.bind(this);

        const ownUuid = uuid();
        this.state = { uuid: ownUuid };
    }

    componentDidMount() {
        const { uuid } = this.state;
        const { dispatch } = this.context;

        dispatch(updateGridAction({ griduuid: uuid, elements: {} }));
    }



    static getImportantInfos(children) {
        console.log(children);
        return React.Children.map(children, child => {
            const { width, height, col, row, fullwidth, fullheight } = child.props;
            return { col, row, width, height, fullwidth, fullheight };
        })
    }

    static generateTemplate({ propsTemplate, dimension }) {
        if (!propsTemplate && dimension !== undefined) return 'auto '.repeat(dimension);
        if (typeof propsTemplate === typeof '') return propsTemplate;
        if (typeof propsTemplate === typeof {} && dimension) {
            let template = '';
            for (let i = 1; i < dimension + 1; i++) {
                const itemTemplate = propsTemplate[i];
                template += (typeof itemTemplate === typeof '') ? itemTemplate : 'auto';
                template += ' ';
            }
            return template;
        }
        return 'fit-content(100%)'
    }

    calculateGridSize() {
        return { x: 1, y: 1, rows: [[]] };
    }

    constructGrid (children, gridDimensions) {

        if (!children) return { editedChildren: null, gridDimensions };

        const grid = Array(gridDimensions.y).fill(Array(gridDimensions.x).fill(0));

        const childrenInfos = [];
        const editedChildren = React.Children.map(children, child => {
            if (!child || !child.props) return child;

            const { col, row, width, height, fullwidth, fullheight } = child.props;
            const newChildProps = { };

            newChildProps.width = fullwidth === 'true' ? gridDimensions.x : width;

            if (fullwidth === 'true') console.log('gdX =', gridDimensions.x);

            // console.log('Ok here', newChildProps);
            // return child;
            return React.cloneElement(child, { ...child.props, griduuid: this.state.uuid });
        });
        return editedChildren;
    }

    findNextEmptyCoordinates() {
        return { col: 1, row: 1 };
    }


    // to perform
    getStyle() {
        const { children, style, columnsTemplate, rowsTemplate, gap = '', rowGap = gap, colGap = gap } = this.props;
        const { rows, ...dimensions } = this.calculateGridSize(children) || { x: 1, y: 1, rows: [] };
        this.gridDimensions = dimensions;

        const gridTemplateRows = Grid.generateTemplate({ propsTemplate: rowsTemplate, dimension: dimensions.y});
        const gridTemplateColumns = Grid.generateTemplate({ propsTemplate: columnsTemplate, dimension: dimensions.x});

        return {
            gridTemplateColumns,
            gridTemplateRows,
            gridRowGap: rowGap,
            gridColumnGap: colGap,
            ...style
        };
    }

    render() {
        const { className, children } = this.props;

        return (
            <div className={`grid ${className || ''}`} style={this.getStyle()}>
                {this.constructGrid(children, this.gridDimensions)}
            </div>
        );
    }
}

Grid.contextType = context;

export { Element, Row, BasicElement } from './GridElement';
