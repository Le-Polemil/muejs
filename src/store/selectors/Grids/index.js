import get from 'lodash.get';

const getGridStore = (store) => get(store, `grids`);


export const getGrid = (store, { uuid }) => get(getGridStore(store), `${uuid}`);


export const getElements = (store, { uuid }) => get(getGridStore(store), `${uuid}.elements`);

export const getElement = (store, { griduuid, uuid }) => get(getElements(store, { griduuid }), `${uuid}`);



export const getGridWidth = (store, { uuid }) => get(getGridStore(store), `${uuid}.width`);
export const getGridHeight = (store, { uuid }) => get(getGridStore(store), `${uuid}.height`);

export const getGridDimensions = (store, { uuid }) => ({ width: getGridWidth(store, { uuid }), height: getGridHeight(store, { uuid }) });




export const findElement = (store, { uuid }) => {
	const grids = getGridStore(store) || [];

	return Object.keys(grids).forEach(gridkey => {
		const found = Object.keys(grids[gridkey]).find(elemkey => elemkey === uuid);
		if (found) return found;
	});
};