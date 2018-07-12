import { RACES } from '../logic/data.js';

const defaultRace = {
  show: false,
  chosen: "none"
};

const raceReducer = (state = defaultRace, action) => {
  switch(action.type) {
    case 'DISPLAY_RACE':
      for(let category of RACES) {
        for(let race of category) {
          if(race.id == action.race) {
            return Object.assign({}, state, {
              show: true,
              chosen: race
            })
          }
        }
      }
      break;

    case 'SHOW_RACE_SELECTION':
      return Object.assign({}, state, defaultRace)

    default:
      return state;
  }
}

export default raceReducer;
