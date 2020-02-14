import React, { Component } from 'react';
import styles from './CountryDetails.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner';
import Map from '../Map/Map';

class CountryDetails extends Component {
  componentDidMount() {
    this.props.fetchCountry(this.props.history.location.pathname);
  }
  render() {
    let renderUI;
    if (this.props.country !== null) {
      renderUI = (
        <React.Fragment>
          <div
            className={
              this.props.isLightModeOn ? styles.CountryLight : styles.Country
            }
          >
            <div className={styles.FlagWrapper}>
              <img
                className={styles.Flag}
                src={this.props.country.flag}
                alt='countryflag'
              />
            </div>
            <div className={styles.firstRow}>
              <div className={styles.CountryName}>
                {this.props.country.name} - {this.props.country.nativeName}
              </div>
              <div className={styles.TableWrapper}>
                <table className={styles.Table}>
                  <thead className={styles.TableRow}>
                    <tr className={styles.TableRow}>
                      <th colSpan={'2'} className={styles.TableHeading}>
                        Geography
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>Region</td>
                      <td className={styles.TableDetails}>
                        {this.props.country.region}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>Subregion</td>
                      <td className={styles.TableDetails}>
                        {this.props.country.subregion}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>Capital</td>
                      <td className={styles.TableDetails}>
                        {this.props.country.capital}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>Demonym</td>
                      <td className={styles.TableDetails}>
                        {this.props.country.demonym}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>LAT/LNG</td>
                      <td className={styles.TableDetails}>
                        {this.props.country.latlng[0]}/
                        {this.props.country.latlng[1]}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>Area</td>
                      <td className={styles.TableDetails}>
                        {this.props.country.area}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>Population</td>
                      <td className={styles.TableDetails}>
                        {this.props.country.population}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>Land Borders</td>
                      <td className={styles.TableDetails}>
                        {this.props.country.borders.length === 0
                          ? ' - - - '
                          : this.props.country.borders.map(border => {
                              return <p key={border}>{border}</p>;
                            })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.TableWrapper}>
                <table className={styles.Table}>
                  <thead className={styles.TableRow}>
                    <tr className={styles.TableRow}>
                      <th colSpan={'2'} className={styles.Heading}>
                        Languages
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>Name</td>
                      <td className={styles.ColLabel}>Native Name</td>
                    </tr>
                    {this.props.country.languages.map(lang => {
                      return (
                        <tr className={styles.TableRow} key={lang.nativeName}>
                          <td className={styles.TableDetails}>{lang.name}</td>
                          <td className={styles.TableDetails}>
                            {lang.nativeName}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.secondRow}>
              <div className={styles.TableWrapper}>
                <table className={styles.Table}>
                  <thead className={styles.TableRow}>
                    <tr className={styles.TableRow}>
                      <th colSpan={'2'} className={styles.TableHeading}>
                        Codes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>ISO 3166-1 alpha-2</td>
                      <td className={styles.TableDetails}>
                        {this.props.country.alpha2Code}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>ISO 3166-1 alpha-3</td>
                      <td className={styles.TableDetails}>
                        {this.props.country.alpha3Code}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>ISO 3166-1 numeric</td>
                      <td className={styles.TableDetails}>
                        {this.props.country.numericCode}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>
                        International calling code
                      </td>
                      <td className={styles.TableDetails}>
                        {this.props.country.callingCodes.map(code => {
                          return '+' + code;
                        })}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>
                        ISO 4217 currency code
                      </td>
                      <td className={styles.TableDetails}>
                        {this.props.country.currencies.map(currency => {
                          return (
                            <React.Fragment key={currency.name}>
                              <p>Currency code: {currency.code}</p>
                              <p>Currency name: {currency.name}</p>
                              <p>Currency symbol: {currency.symbol}</p>
                            </React.Fragment>
                          );
                        })}
                      </td>
                    </tr>
                    <tr className={styles.TableRow}>
                      <td className={styles.ColLabel}>
                        ISO 4217 currency code
                      </td>
                      <td className={styles.TableDetails}>
                        {this.props.country.topLevelDomain.map(domain => {
                          return <p key={domain}> {domain}</p>;
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={styles.Map}>
            <Map
              name={this.props.country.name}
              zoom={this.props.country.borders.length}
              latlng={this.props.country.latlng}
            />
          </div>
        </React.Fragment>
      );
    }
    if (this.props.loading) {
      renderUI = (
        <React.Fragment>
          <Spinner />;
        </React.Fragment>
      );
    }
    if (this.props.error) {
      renderUI = <Redirect to='/' />;
    }

    return <div className={styles.CountryDetailsWrapper}>{renderUI}</div>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.country.loading,
    error: state.country.error,
    country: state.country.country,
    isLightModeOn: state.theme.isLightModeOn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCountry: countryPath => dispatch(actions.fetchCountry(countryPath))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetails);
