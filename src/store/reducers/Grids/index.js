import produce  from 'immer';
import set from 'lodash.set';

import {CREATE_GRID, UPDATE_GRID, UPDATE_GRID_ELEMENT} from '../../actions/Grids';


function getInitialState() {
  return {};
}

export const gridsReducer = (store = getInitialState(), { type, payload } = {}) => {
	if (!type || !payload) return;

	return produce(store, (draft) => {
        switch (type) {


            case CREATE_GRID:
            case UPDATE_GRID: {
                const { griduuid, elements, width, height } = payload;
                return set(draft, `${griduuid}`, { elements, width, height });
            }

            case UPDATE_GRID_ELEMENT: {
                const { griduuid, uuid, element } = payload;
                return set(draft, `${griduuid}.elements.${uuid}`, element);
            }

			// case 'GRID/REMOVE': {
            //     const { uuid } = payload;
            //     delete draft[uuid];
            //     return;
			// }

        }
    })
};
