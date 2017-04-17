import React, { Component } from 'react';
import './Loader.css';

/**
 * Loader.
 */
class Loader extends Component {

  /**
   * render
   * @return {ReactElement} markup.
   */
  render() {
    return (
      <p className="Loader">Loading...</p>
    );
  }
}

Loader.propTypes = {};

export default Loader;
