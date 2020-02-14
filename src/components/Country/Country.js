import React, { Component } from 'react';
import styles from './Country.module.css';
import { connect } from 'react-redux';

class Country extends Component {
  render() {
    return (
      <div
        className={
          this.props.isLightModeOn
            ? styles.CountryContainer
            : styles.CountryContainerDark
        }
      >
        <img src={this.props.country.flag} alt='flag'></img>
        <div className={styles.CountryData}>
          <div className={styles.CountryName}>{this.props.country.name}</div>
          <div>
            <span className={styles.Label}>Population:</span>{' '}
            {this.props.country.population}
          </div>
          <div>
            <span className={styles.Label}>Region:</span>{' '}
            {this.props.country.region}
          </div>
          <div>
            <span className={styles.Label}>Capital:</span>{' '}
            {this.props.country.capital}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLightModeOn: state.theme.isLightModeOn
  };
};

export default connect(mapStateToProps)(Country);
