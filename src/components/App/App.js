import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import UserImg from '../../images/user-profile.jpg';
import VideosList from '../Pages/VideosList/VideosList';
import Video from '../Pages/Video/Video';

import './App.css';

import mapStateToProps from '../../redux/stateToProps/App';
import mapDispatchToProps from '../../redux/dispatchToProps/App';

/**
 * App.
 */
class App extends Component {

  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleMenu(){
    this.props.toggleMenu();
  }

  toggleSearch(){
    this.props.toggleSearch();
  }

  /**
   * render
   * @return {ReactElement} markup.
   */
  render() {
    return (
      <div className="App">
        <div className={"wrapper" + (this.props.menuOpened ? " menu-opened" : "")}>
          <div className={"col col-left"}>
            <section className="profile">
              <img src={UserImg} alt="Mario" />
              <p>Mario</p>
            </section>

            <nav>
              <a href="">Menu 1</a>
              <a href="">Menu 2</a>
              <a href="">Menu 3</a>
              <a href="">Menu 4</a>
              <a href="">Menu 5</a>
              <a href="">Menu 6</a>
            </nav>

            <section className="logout">
              <a href="">Logout</a>
            </section>

          </div>

          <div className="col col-right">
            <section className="mini-bar">
              <input type="button" className="btn-menu" onClick={this.toggleMenu} />
              <h3>Video list</h3>
              <input type="button" className="btn-search" onClick={this.toggleSearch} />
            </section>
            <SearchBar />

            <Router>
              <section>
                <Route exact path="/" component={VideosList} />
                <Route path="/video/:id" component={Video}/>
              </section>
            </Router>

          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

App.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(App);