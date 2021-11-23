
const initialWagonState = {
  supplies: 100,
  distanceTravelled: 0,
  daysOnTheRoad: 0
};

const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      return {
        ...state,
            supplies: state.supplies + 15,
            distanceTravelled: state.distanceTravelled,
            daysOnTheRoad: state.daysOnTheRoad + 1
      }
    }
  }

  switch(action.type) {
    case 'travel': {
      if (state.supplies > 0) {
          return {
          ...state, 
            supplies: state.supplies - (20 * action.payload),
            distanceTravelled: state.distanceTravelled + (10 * action.payload),
            daysOnTheRoad: state.daysOnTheRoad + (1 * action.payload)
        } 
      } else if (state.supplies <= 0) {
        return [...state]
      }
    }
  }

  switch(action.type) {
    case 'tippedWagon': {
      return {
        ...state,
          supplies: state.supplies - 30,
          distanceTravelled: state.distanceTravelled,
          daysOnTheRoad: state.daysOnTheRoad + 1
      }
    }
  }


  switch(action.type){
    default: {
      return state;
    }
  }
}


let wagon = reducer(undefined, {});
console.log(wagon);

const firstDay = { type: 'travel', payload: 1 };

wagon = reducer(wagon, firstDay);
console.log(wagon);

const secondDay = { type: 'gather' };
wagon = reducer(wagon, secondDay);
console.log(wagon);

const thirdDay = { type: 'tippedWagon' };
wagon = reducer(wagon, thirdDay);
console.log(wagon);

const threeMoreDays = { type: 'travel', payload: 3 }
wagon = reducer(wagon, threeMoreDays);
console.log(wagon);

const oneMoreDay = { type: 'travel', payload: 1 }
wagon = reducer(wagon, oneMoreDay);
console.log(wagon);