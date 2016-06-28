import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login';
import AboutHandler from './components/About';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="app">Home2</Link>
		<Link to="login">Login</Link>
        <Link to="about">About</Link>
        <RouteHandler/>
      </div>
    )
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
	<Route name="about" path="/about" handler={AboutHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
