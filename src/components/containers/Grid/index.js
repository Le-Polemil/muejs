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
        this.state = { uuid: ownUuid, columns: 1, rows: 1 };
    }

    componentDidMount() {
        const { uuid } = this.state;
        const { dispatch } = this.context;

        dispatch(updateGridAction({ griduuid: uuid, elements: {} }));
    }

    componentWillReceiveProps (nextProps, nextContext) {
    	console.log('this:', this.context.state);
    	console.log('next:', nextContext.state);
    	if (JSON.stringify(this.context.state) !== JSON.stringify(nextContext.state)) {
			console.log('coucou');
	    }
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
	findNextEmptyCoordinates() {
		return { col: 1, row: 1 };
	}

    // constructGrid (children, gridDimensions) {
    //
    //     if (!children) return { editedChildren: null, gridDimensions };
    //
    //     const grid = Array(gridDimensions.y).fill(Array(gridDimensions.x).fill(0));
    //
    //     const childrenInfos = [];
    //     const editedChildren = React.Children.map(children, child => {
    //         if (!child || !child.props) return child;
    //
    //         const { col, row, width, height, fullwidth, fullheight } = child.props;
    //         const newChildProps = { };
    //
    //         newChildProps.width = fullwidth === 'true' ? gridDimensions.x : width;
    //
    //         if (fullwidth === 'true') console.log('gdX =', gridDimensions.x);
    //
    //         // console.log('Ok here', newChildProps);
    //         // return child;
    //         return React.cloneElement(child, { ...child.props, griduuid: this.state.uuid });
    //     });
    //     return editedChildren;
    // }


    injectUuid (children) {
        const { uuid } = this.state;
        return React.Children.map(children, child => {
            return React.cloneElement(child, { ...child.props, griduuid: uuid });
        });
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
                { this.injectUuid(children) }
            </div>
        );
    }
}

Grid.contextType = context;

export { Element, Row, BasicElement } from './GridElement';
