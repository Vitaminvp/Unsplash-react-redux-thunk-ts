import React, { Component } from 'react';
import './App.scss';
import {Grid} from "./Components/grid";
import {Nav} from "./Components/nav";
import {Route, RouteChildrenProps} from "react-router";
import {Link} from "react-router-dom";

export enum ButtonTypes {
  SUBMIT = 'submit',
  BUTTON = 'button'
}
const routes = [
  {
    title: 'home',
    path: '/',
    exact: true,
    props: {
      title: ''
    },
    Component: Grid
  },
  {
    title: 'about',
    path: '/about',
    Component: () => <h1>Some text</h1>
  },
  {
    path: '/image/:id',
    Component: (props: RouteChildrenProps<{id:string}>) => <h1>Details {props.match!.params.id}</h1>
  }
];

class App extends Component<{}, {}> {

  render() {
    return <div className={'app-wrapper'}>
      <Nav>
        {
          routes.map(route => <Link key={route.title} to={route.path}>{route.title}</Link>)
        }
      </Nav>
      {
        routes.map(({path, exact, Component, title, props}) =>(
            <Route
              key={title}
              path={path}
              exact={exact}
              render={ (routeProps) => <Component {...routeProps} /> }
            />
        ))
      }
    </div>;
  }
}

export default App;
