import { get } from 'lodash';


export const getGrid = (state, { uuid }) => get(state, `grids.${uuid}`);


export const getElement = (state, { griduuid, uuid }) => get(state, `grids.${griduuid}.${uuid}`);


export const findElement = (state, { uuid }) => {
	const grids = get(state, `grids`) ||  [];
	return Object.keys(grids).forEach(gridkey => {
		const found = Object.keys(grids[gridkey]).find(elemkey => elemkey === uuid);
		if (found) return found;
	});
};