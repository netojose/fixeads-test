import {toggleMenu, toggleSearch, loadVideos} from '../actionCreators/App';

export default function(dispatch) {
  return {
    toggleMenu: () => {
        dispatch(toggleMenu());
    },
    toggleSearch: () => {
        dispatch(toggleSearch());
    },
    loadVideos: () => {
        dispatch(loadVideos());
    }
  }
}