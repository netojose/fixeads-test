import constants from '../constants';

export function setVideo(id){
    return  {
        type: constants.SET_VIDEO,
        id: id
    }
}