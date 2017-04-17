import {loadVideos} from '../actionCreators/VideosList';

export default function(dispatch) {
  return {
    loadVideos: () => {
        dispatch(loadVideos());
    }
  }
}