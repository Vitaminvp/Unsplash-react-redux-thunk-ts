import React, { Component } from 'react';
import './App.scss';
import {Grid} from "./Components/grid";
import {Nav} from "./Components/nav";

export enum ButtonTypes {
  SUBMIT = 'submit',
  BUTTON = 'button'
}


class App extends Component<{}, {}> {


  render() {
    return <div className={'app-wrapper'}>
      <Nav />
      <Grid />
    </div>;
  }
}

export default App;
