import React, { Component } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <div
        className={
          this.props.isLightModeOn ? styles.NavbarLight : styles.Navbar
        }
      >
        <Link
          className={this.props.isLightModeOn ? styles.LinkLight : styles.Link}
          to='/'
        >
          Where in the world?
        </Link>
        <button
          onClick={this.props.toggleTheme}
          className={
            this.props.isLightModeOn ? styles.ButtonLight : styles.Button
          }
        >
          {this.props.isLightModeOn ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLightModeOn: state.theme.isLightModeOn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme: () => dispatch(actions.toggleTheme())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
