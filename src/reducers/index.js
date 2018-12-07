import * as constants from '../util/constants';

const INITIAL_STATE = {
    players: [],
    positions: []
};

const players = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case constants.SEARCH:
            return { 
                ...state, 
                players: action.payload,
                positions: [...new Set(action.payload.map(value => value.position)) ] 
            }
        default:
            return state;
    }
}

export default players;