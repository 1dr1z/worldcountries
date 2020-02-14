import React, { Component } from 'react';
import styles from './SelectFindCountry.module.css';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';

class SelectFindCountry extends Component {
  handleChange(event) {
    this.props.fetchSelectedRegion(event.target.value);
  }

  render() {
    return (
      <div>
        <select
          onChange={event => this.handleChange(event)}
          className={
            this.props.isLightModeOn
              ? styles.SelectCountryLight
              : styles.SelectCountryDark
          }
          defaultValue='all'
        >
          <option value='all'>Filter by Region</option>
          <option value='africa'>Africa</option>
          <option value='americas'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
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
    fetchSelectedRegion: region => dispatch(actions.fetchSelectedRegion(region))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectFindCountry);
