import produce  from 'immer';
import set from 'lodash.set';

import {SET_GRID, UPDATE_GRID_ELEMENT} from '../../actions/Grids';


function getInitialState() {
  return {};
}

export const gridsReducer = (store = getInitialState(), { type, payload } = {}) => {
	if (!type || !payload) return;

	return produce(store, (draft) => {
        switch (type) {

            case SET_GRID: {
                const { id, elements, width, height } = payload;
                return set(draft, `${id}`, { elements, width, height });
            }

            case UPDATE_GRID_ELEMENT: {
                const { idGrid, id, element } = payload;
                return set(draft, `${idGrid}.elements.${id}`, element);
            }

			// case 'GRID/REMOVE': {
            //     const { uuid } = payload;
            //     delete draft[uuid];
            //     return;
			// }

        }
    })
};
