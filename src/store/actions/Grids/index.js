import React, { Component } from 'react';
import { getElement, getGrid } from '../../selectors/Grids';


const GridsContext = React.createContext();
export default GridsContext;


export const GridsConsumer = GridsContext.Consumer;


export const UPDATE_GRID = 'grids/UPDATE_GRID';
export const updateGridAction = ({ griduuid, elements }) => ({
	type: UPDATE_GRID,
	payload: {
		griduuid,
		elements,
	}
});

export const updateGridElementAction = (store, { griduuid, elementuuid, minifiedElement }) => {
	if (!griduuid || !elementuuid || !minifiedElement) return;

	const existingElement = getElement(store, { griduuid, uuid: elementuuid });

	if (JSON.stringify(existingElement) === JSON.stringify(minifiedElement)) return;

	const newElements = {
		...getGrid(store, { uuid: griduuid }),
		[elementuuid]: minifiedElement
	};
	return updateGridAction({ griduuid: griduuid, elements: newElements });
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
