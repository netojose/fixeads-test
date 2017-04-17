import constants from './constants';

export var initialState = {
   menuOpened: false,
   searchOpened: false,
   videos: null,
   video: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.TOGGLE_MENU:
      return {...state, menuOpened: !state.menuOpened};
    case constants.TOGGLE_SEARCH:
      return {...state, searchOpened: !state.searchOpened};
    case constants.LOAD_VIDEOS:
      return {...state, videos: action.payload};
    case constants.SET_VIDEO:
      return {...state, video: action.id};
    default:
      return state;
  }
}