import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchBar.css';

import mapStateToProps from '../../redux/stateToProps/SearchBar';
import mapDispatchToProps from '../../redux/dispatchToProps/SearchBar';

/**
 * SearchBar.
 */
class SearchBar extends Component {

  componentDidUpdate(prevProps){
    if(this.props.searchOpened && !prevProps.searchOpened){
      this.textInput.focus();
    }
  }

  /**
   * render
   * @return {ReactElement} markup.
   */
  render() {
    return (
      <section className={"SearchBar" + (this.props.searchOpened ? " opened" : "")}>
        <input type="text" placeholder="Type your search" ref={(input) => { this.textInput = input; }} />
        <input type="button" value="Search" />
      </section>
    );
  }
}

SearchBar.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
