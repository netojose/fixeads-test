export default function mapStateToProps(state) {
  let {videos} = state;
  let video = (videos && state.video ? videos : []).find(item => item.VideoId === state.video);
  return {
    video,
    videos
  }
}