import produce  from 'immer';
import { set } from 'lodash';

import { UPDATE_GRID } from '../../actions/Grids';


function getInitialState() {
  return {};
}

export const gridsReducer = (store = getInitialState(), { type, payload } = {}) => {
	if (!type || !payload) return;

	return produce(store, (draft) => {
        switch (type) {

            case UPDATE_GRID: {
                const { griduuid, elements } = payload;
                return set(draft, `${griduuid}`, elements);
            }

			case 'GRID/REMOVE': {
                const { uuid } = payload;
                delete draft[uuid];
                return;
			}

        }
    })
};
