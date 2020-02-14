import React, { Component } from 'react';
import Navbar from '../../Navbar/Navbar';
import styles from './Layout.module.css';
import { connect } from 'react-redux';

class Layout extends Component {
  render() {
    return (
      <div
        className={
          this.props.isLightModeOn ? styles.LightMode : styles.DarkMode
        }
      >
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLightModeOn: state.theme.isLightModeOn
  };
};

export default connect(mapStateToProps)(Layout);
