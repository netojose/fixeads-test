import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './ResultItem.css';

/**
 * ResultItem.
 */
class ResultItem extends Component {

  /**
   * render
   * @return {ReactElement} markup.
   */
  render() {
    let {item} = this.props;
    let url = "/video/" + item.VideoId;
    return (
      <section className="ResultItem">  
          <Link to={url}>
            <img src={item.Thumbnail} alt="Thumbnail" />
          </Link>
          <div className="info">
            <h3><Link to={url}>{item.Title}</Link></h3>
            <p>{item.Description}</p>
          </div>
      </section>
    );
  }
}

ResultItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ResultItem;
