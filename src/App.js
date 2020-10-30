import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        {/* <Route path = "/login" component={}/>
        <Route path = "/range-breakout" component = {}/> */}
      </Switch>
    );

    return(
      <div>
        <Layout>
          {/* {routes} */}
        </Layout>
      </div>
    );
  }
}

export default App;
