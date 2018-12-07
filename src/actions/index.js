import * as constants from '../util/constants';

export const fetchPlayerList = () => {
    return dispatch => {
        return fetch(`${constants.API_URL}`)
            .then(response => response.json())
            .then(data => dispatch(setListOfPlayers(data)))
    }
};

export const setListOfPlayers = (payload) => {
    return {
        type: constants.SEARCH,
        payload
    }
}