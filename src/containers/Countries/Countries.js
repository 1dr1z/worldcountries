import React, { Component } from 'react';
import styles from './Countries.module.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import Country from '../../components/Country/Country';
import FindCountry from '../../components/FindCountry/Input/FindCountry';
import SelectFindCountry from '../../components/FindCountry/Select/SelectFindCountry';
import { Link } from 'react-router-dom';

class Countries extends Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    const itemsPerPage = this.props.countries.slice(
      (this.props.currPage - 1) * this.props.noDisplayedItems,
      this.props.noDisplayedItems * this.props.currPage
    );
    let renderData = (
      <div className={styles.CountriesWrapper}>
        {itemsPerPage.map(country => {
          let countryName = country.alpha3Code.replace(/\s/g, '');
          countryName = countryName.toLowerCase();

          return (
            <React.Fragment key={country.name}>
              <Link to={`/${countryName}`}>
                <Country country={country} />
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    );
    if (this.props.loading) {
      renderData = (
        <div className={styles.CountriesWrapper}>
          <Spinner />;
        </div>
      );
    }

    return (
      <div className={styles.CountriesContainerWrapper}>
        <div className={styles.FilterWrapper}>
          <FindCountry />
          <SelectFindCountry />
        </div>
        {renderData}
        <div
          className={
            this.props.isLightModeOn
              ? styles.PaginationLight
              : styles.Pagination
          }
        >
          <button
            onClick={this.props.prevPage}
            disabled={this.props.currPage === 1 ? true : false}
          >
            Previous
          </button>

          <button
            onClick={this.props.nextPage}
            disabled={
              this.props.currPage === this.props.totalPages ? true : false
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
    loading: state.countries.loading,
    error: state.countries.error,
    currPage: state.countries.currentPage,
    noDisplayedItems: state.countries.numberOfDisplayedItems,
    totalPages: state.countries.totalPages,
    isLightModeOn: state.theme.isLightModeOn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCountries: () => dispatch(actions.fetch()),
    nextPage: () => dispatch(actions.nextPage()),
    prevPage: () => dispatch(actions.prevPage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
