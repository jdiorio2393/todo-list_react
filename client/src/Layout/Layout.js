import React, { Component, Fragment } from 'react';
import Table from '../Components/Table/Table';
import Input from '../Components/Input/Input';
import Edit from '../Components/Input/Edit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Table />} />
          <Route exact path='/add' component={Input} />
          <Route exact path='/edit/:id' component={Edit} />
        </Switch>
      </Router>
    );
  }
}

export default Layout;
