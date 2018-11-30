import React from 'react';
import deepEqual from 'lodash.isequal';

import { getElement, getElements, getGridDimensions, getGridHeight, getGridWidth } from '../../selectors/Grids';


const GridsContext = React.createContext();
export default GridsContext;


export const GridsConsumer = GridsContext.Consumer;



export const SET_GRID = 'grids/SET_GRID';
const updateGridAction = ({ id, elements, width, height }) => ({
    type: SET_GRID,
    payload: {
        id,
        elements,
        width,
        height
    }
});

export const setGrid = ({ grid, elements, width, height }) => {
	return store => {
		if (!grid || !elements && !width && !height) return;

		if (elements === undefined) {
		    elements = getElements(store, { grid });
        }
		if (width === undefined) {
		    width = getGridWidth(store, { grid});
        }
		if (height === undefined) {
		    height = getGridHeight(store, { grid });
        }

        return updateGridAction({ id: grid, elements, width, height });
    }
};



export const UPDATE_GRID_ELEMENT = 'grids/UPDATE_GRID_ELEMENT';
const updateGridElementAction = ({ idgrid, id, element }) => ({
	type: UPDATE_GRID_ELEMENT,
	payload: {
		idgrid,
		id,
		element,
	}
});

export const updateGridElement = ({ grid, id, element }) => {
	return store => {
        if (!store || !grid || !id || !element) return;

        const existingElement = getElement(store, { grid, element: id });

        if (deepEqual(existingElement, element)) return;

        return updateGridElementAction({ idgrid: grid, id, element });
    };
};







// export function setGrid(grid) {
// 	const { grids } = this.state;
// 	if (!grid || !grids) return;
//
// 	return;
// 	this.setState(prevState => ({
// 		grids: Object.assign(grid, prevState.grids)
// 	}));
// }
//
// 	setElement(idgrid, element) {
// 		const { grids } = this.state;
// 		if (!grids || !grids[idgrid] || !element) return;
//
// 		const updatedGrid = { [idgrid]: { ...grids[idgrid], element } };
//
// 		this.setGrid(updatedGrid);
// 	}
//
//
//
//
//
//
// 	render() {
// 		const dispatch = action => {
// 			this.setState(state => reducer(state, action));
// 		};
//
// 		return (
// 			<GridsContext.Provider value={{ state: this.state, dispatch }}>
// 				{ this.props.children }
// 			</GridsContext.Provider>
// 		)
// 	}
// }
