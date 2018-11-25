import { get } from 'lodash';

const getGridStore = (store) => get(store, `grids`);

export const getGrid = (store, { uuid }) => get(getGridStore(store), `${uuid}`);

export const getElement = (store, { griduuid, uuid }) => get(getGridStore(store), `${griduuid}.${uuid}`);


export const findElement = (store, { uuid }) => {
	const grids = getGridStore(store) || [];

	return Object.keys(grids).forEach(gridkey => {
		const found = Object.keys(grids[gridkey]).find(elemkey => elemkey === uuid);
		if (found) return found;
	});
};