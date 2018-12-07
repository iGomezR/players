import configureStore from "redux-mock-store";
import ReduxThunk from "redux-thunk";
import {
  setListOfPlayers,
  fetchPlayerList
} from "./index";

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

describe("Actions", () => {

  const store = mockStore({});

  it("creates an action to fetch the data from an API", () => {
    return store.dispatch(fetchPlayerList()).then(payload => {
      const actions = store.getActions(setListOfPlayers);
      expect(actions[0]).toEqual(payload);
    });
  });
});
