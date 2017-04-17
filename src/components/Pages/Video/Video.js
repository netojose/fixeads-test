import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItems from '../../ListItems/ListItems.js';
import Loader from '../../Loader/Loader.js';
import './Video.css';

import mapStateToProps from '../../../redux/stateToProps/Video';
import mapDispatchToProps from '../../../redux/dispatchToProps/Video';

/**
 * SearchBar.
 */
class Video extends Component {

  componentWillMount(){
    this.props.setVideo(this.props.match.params.id);
  }

  componentDidMount(){
    if(!this.props.videos){
      this.props.loadVideos();
    }
  }

  /**
   * render
   * @return {ReactElement} markup.
   */
  render() {
    return (
      <div className="Video">
        <div className="col col-video-left">
          {(() => {
              if(this.props.video){
                let {video} = this.props;
                return (
                  <div>
                    <iframe src={`https://www.youtube.com/embed/${video.VideoId}`} allowFullScreen></iframe>
                    <h3>{video.Title}</h3>
                    <p className="info">{video.Description}</p>
                  </div>
                )
              } else {
                return <Loader />
              }
          })()}
        </div>
        <div className="col col-video-right">
          <ListItems items={this.props.videos} ignore={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

Video.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Video);

