import constants from '../constants';

export function toggleMenu(){
    return  {
        type: constants.TOGGLE_MENU
    }
}

export function toggleSearch(){
    return  {
        type: constants.TOGGLE_SEARCH
    }
}