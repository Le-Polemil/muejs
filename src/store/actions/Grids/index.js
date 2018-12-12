import React from 'react';
import deepEqual from 'lodash.isequal';

import {
    getElement,
    getGridElements,
    getGrid,
    getGridHeight,
    getGridWidth
} from '../../selectors/Grids';


const GridsContext = React.createContext();
export default GridsContext;


export const GridsConsumer = GridsContext.Consumer;



export const CREATE_GRID = 'grids/CREATE_GRID';
const createGridAction = ({ grid, data }) => ({
    type: CREATE_GRID,
    payload: {
        grid,
        data
    }
});
export const createGrid = ({ grid, data }) => {
	return store => {
		if (!grid || !data) return;

        return createGridAction({ grid, data });
    };
};


export const UPDATE_GRID_ELEMENTS = 'grids/UPDATE_GRID_ELEMENTS';
const updateGridElementsAction = ({ grid, elements }) => ({
	type: UPDATE_GRID_ELEMENTS,
	payload: {
		grid,
		elements,
	}
});
export const updateGridElements = ({ grid, elements }) => {
	return store => {
		if (!grid || !elements) return;

		if (deepEqual(elements, getGridElements(store, { grid }))) return;

		return updateGridElementsAction({ grid, elements });
	};
};



export const UPDATE_GRID_DIMENSIONS = 'grids/UPDATE_GRID_DIMENSIONS';
const updateGridDimensionsAction = ({ grid, width, height }) => ({
	type: UPDATE_GRID_DIMENSIONS,
	payload: {
		grid,
		width,
        height,
	}
});
export const updateGridDimensions = ({ grid, width, height }) => {
    return store => {
        if (!grid || !width || !height) return;

		if (width === getGridWidth(store, { grid }) && height === getGridHeight(store, { grid })) return;


        return updateGridDimensionsAction({ grid, width, height });
    };
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







// export function createGrid(grid) {
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
// 		this.createGrid(updatedGrid);
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
