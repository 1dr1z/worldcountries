import React, { Component } from 'react';
import './App.css';
import Layout from './components/UI/Layout/Layout';
import Countries from './containers/Countries/Countries';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';
import DefaultRoute from './components/DefaultRoute/DefaultRoute';
class App extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
  }
  render() {
    const routes = this.props.countries.map(country => {
      let countryName = country.alpha3Code.replace(/\s/g, '');
      countryName = countryName.toLowerCase();
      return (
        <Route
          key={countryName}
          path={`/${countryName}`}
          component={CountryDetails}
        />
      );
    });
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path='/' component={Countries} />
            {routes}
            <Route component={DefaultRoute} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries.countries
  };
};

export default connect(mapStateToProps)(App);
