import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultItem from '../ResultItem/ResultItem';
import Loader from '../Loader/Loader';
import './ListItems.css';

/**
 * ListItems.
 */
class ListItems extends Component {

  /**
   * render
   * @return {ReactElement} markup.
   */
  render() {
    return (
      <div className="ListItems"> 
        {(() => {
          if(this.props.items){
            return this.props.items.filter(i => i.VideoId !== this.props.ignore).map(item => {
              return <ResultItem item={item} key={item.VideoId} />;
            });
          } else {
            return <Loader />;
          }
        })()} 
      </div>
    );
  }
}

ListItems.propTypes = {
  items: PropTypes.array,
  ignore: PropTypes.string
};

ListItems.defaultProps = {
  items: null,
  ignore: null
};

export default ListItems;
