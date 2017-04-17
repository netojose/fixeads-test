import axios from 'axios';
import constants from '../constants';

export function loadVideos(){
    return dispatch => {
        return axios.get('./data.json').then(data => {
            dispatch({type: constants.LOAD_VIDEOS, payload: data.data});
        });
    }
}