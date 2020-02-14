import React, { Component } from 'react';
import styles from './FindCountry.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class FindCountry extends Component {
  inputChangeHandler = event => {
    this.props.findCountry(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          className={
            this.props.isLightModeOn
              ? styles.InputFieldLight
              : styles.InputFieldDark
          }
          type='text'
          onChange={event => this.inputChangeHandler(event)}
        />
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
    findCountry: country => dispatch(actions.fetchFilteredCountries(country))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindCountry);
