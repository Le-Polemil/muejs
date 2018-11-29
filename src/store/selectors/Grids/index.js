import get from 'lodash.get';

const getGridStore = (store) => get(store, `grids`);


export const getGrid = (store, { grid }) => get(getGridStore(store), `${grid}`);



export const getGridExceptElements = (store, { grid }) => {
	const found = getGrid(store, `${grid}`) || { elements: {} };
	delete found.elements;
	return found;
};


export const getElements = (store, { grid }) => get(getGridStore(store), `${grid}.elements`);

export const getElement = (store, { grid, element }) => get(getElements(store, { grid }), `${element}`);



export const getGridWidth = (store, { grid }) => get(getGridStore(store), `${grid}.width`);
export const getGridHeight = (store, { grid }) => get(getGridStore(store), `${grid}.height`);

export const getGridDimensions = (store, { grid }) => ({ width: getGridWidth(store, { grid }), height: getGridHeight(store, { grid }) });




export const findElement = (store, { id }) => {
	const grids = getGridStore(store) || [];

	return Object.keys(grids).forEach(gridkey => {
		const found = Object.keys(grids[gridkey]).find(elemkey => elemkey === id);
		if (found) return found;
	});
};