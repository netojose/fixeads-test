import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItems from '../../ListItems/ListItems.js';
import './VideosList.css';

import mapStateToProps from '../../../redux/stateToProps/VideosList';
import mapDispatchToProps from '../../../redux/dispatchToProps/VideosList';

/**
 * VideosList.
 */
class VideosList extends Component {

  componentDidMount(){
    this.props.loadVideos();
  }

  /**
   * render
   * @return {ReactElement} markup.
   */
  render() {
    return (
      <div className="VideosList">
        <h2 className="page-title">Video list</h2>
        <section className="items">
          <ListItems items={this.props.videos} />
        </section>
      </div>
    );
  }
}

VideosList.propTypes = {};

VideosList.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VideosList);
