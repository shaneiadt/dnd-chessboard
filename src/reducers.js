import { combineReducers } from 'redux';

const INIT_STATE = [0, 0];

const knight = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'MOVE_KNIGHT':
            return [action.payload[0], action.payload[1]]
        default:
            return state;

    }
}

export default combineReducers({ knight });