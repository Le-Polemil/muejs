import produce  from 'immer';
import { set } from 'lodash';

import { UPDATE_GRID } from '../../actions/Grids';



function getInitialState() {
  return {};
}

export const gridsReducer = (state = getInitialState(), { type, payload }) => {
	return produce(state, (draft) => {
        switch (type) {

            case UPDATE_GRID: {
                const { uuid, elements } = payload;
                return set(draft, `grids.${uuid}`, elements);
            }

			case 'GRID/REMOVE': {
                const { uuid } = payload;
                delete draft.grids[uuid];
                return;
			}

        }
    })
};
