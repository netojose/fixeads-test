import {setVideo} from '../actionCreators/Video';
import {loadVideos} from '../actionCreators/VideosList';

export default function(dispatch) {
  return {
    setVideo: id => {
        dispatch(setVideo(id));
    },
    loadVideos: id => {
        dispatch(loadVideos(id));
    }
  }
}