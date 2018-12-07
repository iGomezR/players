import rootReducer from "./index";
import * as constants from "../util/constants";

describe("reducers", () => {
  it("sets a empty list of players", () => {
    const result = {
      positions: [],
      players: []
    };
    const payload = [];
    expect(
      rootReducer(undefined, { type: constants.SEARCH, payload })
    ).toEqual(result);
  });

  it("sets a list of players", () => {
    const result = {
      positions: ['Centre-Forward'],
      players: [{
        "contractUntil" : "2022-06-30",
        "dateOfBirth" : "1993-05-13",
        "jerseyNumber" : 9,
        "name" : "Romelu Lukaku",
        "nationality" : "Belgium",
        "position" : "Centre-Forward"
      }]
    };
    
    const payload = [
      {
        "contractUntil" : "2022-06-30",
        "dateOfBirth" : "1993-05-13",
        "jerseyNumber" : 9,
        "name" : "Romelu Lukaku",
        "nationality" : "Belgium",
        "position" : "Centre-Forward"
      }
    ];
    expect(
      rootReducer(undefined, { type: constants.SEARCH, payload })
    ).toEqual(result);
  });
});
