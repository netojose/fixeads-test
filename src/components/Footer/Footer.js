import React, { PureComponent } from 'react';
import './Footer.css';

/**
 * Footer.
 */
class Footer extends PureComponent {

  /**
   * render
   * @return {ReactElement} markup.
   */
  render() {
    return (
      <footer className="Footer">
          <div className="wrapper">
            <nav className="menu">
              <a href="">Footer 1</a>
              <a href="">Footer 2</a>
              <a href="">Footer 3</a>
            </nav>

            <nav className="copyright">
              <a href="">OLX copyright 2017</a>
            </nav>
          </div>
        </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
