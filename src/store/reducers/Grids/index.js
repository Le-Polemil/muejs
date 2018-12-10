import produce  from 'immer';
import set from 'lodash.set';

import { CREATE_GRID, UPDATE_GRID_DIMENSIONS, UPDATE_GRID_ELEMENT, UPDATE_GRID_ELEMENTS } from '../../actions/Grids';


function getInitialState() {
  return {};
}

export const gridsReducer = (store = getInitialState(), { type, payload } = {}) => {
	if (!type || !payload) return;

	return produce(store, (draft) => {
        switch (type) {

            case CREATE_GRID: {
                const { grid, data } = payload;

                set(draft, `${grid}`, data);

                break;
            }

            case UPDATE_GRID_ELEMENTS: {
                const { grid, elements } = payload;

                set(draft, `${grid}.elements`, elements);

                break;
            }

            case UPDATE_GRID_DIMENSIONS: {
                const { grid, width, height } = payload;

                set(draft, `${grid}.width`, width);
                set(draft, `${grid}.height`, height);

                break;
            }

            case UPDATE_GRID_ELEMENT: {
                const { idgrid, id, element } = payload;
                set(draft, `${idgrid}.elements.${id}`, element);

                break;
            }

        }
        return draft;
    })
};
