import React from 'react';
import {getElement, getElements, getGridHeight, getGridWidth} from '../../selectors/Grids';


const GridsContext = React.createContext();
export default GridsContext;


export const GridsConsumer = GridsContext.Consumer;



export const CREATE_GRID = 'grids/CREATE_GRID';
const createGridAction = ({ griduuid, elements, width, height }) => ({
	type: CREATE_GRID,
	payload: {
		griduuid,
		elements,
		width,
		height,
	}
});
export const createGrid = ({ uuid, elements = {}, width = 1, height = 1 }) => {
	return store => {
		return createGridAction({ griduuid: uuid, elements, width, height });
    }
};



export const UPDATE_GRID = 'grids/UPDATE_GRID';
const updateGridAction = ({ griduuid, elements, width, height }) => ({
	type: UPDATE_GRID,
	payload: {
		griduuid,
		elements,
		width,
		height
	}
});
export const updateGrid = ({ uuid, elements, width, height }) => {
	return store => {
		elements = elements || getElements(store, { uuid });
        width = width || getGridWidth(store, { uuid });
        height = height || getGridHeight(store, { uuid });
		return updateGridAction({ griduuid: uuid, elements, width, height });
    }
};



export const UPDATE_GRID_ELEMENT = 'grids/UPDATE_GRID_ELEMENT';
const updateGridElementAction = ({ griduuid, uuid, element }) => ({
	type: UPDATE_GRID_ELEMENT,
	payload: {
		griduuid,
		uuid,
		element,
	}
});

export const updateGridElement = ({ griduuid, elementuuid, minifiedElement }) => {
	return (store) => {
        if (!store || !griduuid || !elementuuid || !minifiedElement) return;

        const existingElement = getElement(store, { griduuid, uuid: elementuuid });

        if (JSON.stringify(existingElement) === JSON.stringify(minifiedElement)) return;

        return updateGridElementAction({ griduuid: griduuid, uuid: elementuuid, element: minifiedElement });
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
// 	setElement(griduuid, element) {
// 		const { grids } = this.state;
// 		if (!grids || !grids[griduuid] || !element) return;
//
// 		const updatedGrid = { [griduuid]: { ...grids[griduuid], element } };
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
