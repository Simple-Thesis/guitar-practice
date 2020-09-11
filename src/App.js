//Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Pages
import * as pages from './pages';
//Other
import './styles/App.css';
import { urls } from './common/constants';

class App extends Component{
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className='app-container'>
            <Switch>
                <Route exact path={urls.fretboardTests} component={ pages.FretboardTest }/>
                <Route exact path={urls.home} component={ pages.Home }/>
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
