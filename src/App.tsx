/** @jsx jsx */
import React from 'react';
import Navbar from './Navbar';
import { css, jsx } from '@emotion/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';

const App: React.FunctionComponent<{}> = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <Switch>
        <Route path="/subpage">
          <div>Some other route</div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
