import React, { Component } from 'react';
import { gridsReducer } from '../../reducers/Grids';


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
