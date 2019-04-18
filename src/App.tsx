import React, { Component } from 'react';
import './App.scss';
import {Grid} from "./Components/grid";
import {Image} from './types/API';
import getImages from "./api";
import {Button} from "./Components/button";
import {Nav} from "./Components/nav";

export enum ButtonTypes {
  SUBMIT = 'submit',
  BUTTON = 'button'
}

interface State {
  items: Array<Image>;
  total: number;
  totalPages: number;
  currentPage: number;
  searchInput: string;
  filterInput: string;
}

class App extends Component<{}, State> {
  state = {
    items: [],
    total: 0,
    totalPages: 0,
    currentPage: 1,
    searchInput: '',
    filterInput: ''
  };

  private handleSearch = async (searchInput:string) => {
    const { currentPage } = this.state;
    //const responseData = await this.fetchImages(searchInput);
    const responseData = await getImages(searchInput, currentPage);

    this.setState(state => ({...state, ...responseData }));
  };

  private loadImages = () => {
    const currentPage = ++this.state.currentPage;
    this.setState(state => ({
        ...state, currentPage
    }), async ()=>{
      const { searchInput, currentPage } = this.state;
      const { items } = await getImages(searchInput, currentPage);
      const updateItems = [...this.state.items, ...items];
      this.setState(state => ({...state, items: updateItems}), () => console.log("this.state", this.state));
    });
  };

  private onFilter = (value: object) => {
      this.setState(state => ({...state, ...value}));
  };

  render() {
    const {total, items} = this.state;
    return <div className={'app-wrapper'}>
      <Nav onSearch={this.handleSearch} onFilter={this.onFilter} />
      <Grid {...this.state} />
      {items.length > 0 && total > items.length?
          <Button className="native-button" type={ButtonTypes.BUTTON} onClick={this.loadImages}>Show more {total ? `(${items.length} of ${total})` : ''}</Button>
          : null
      }
    </div>;
  }
}

export default App;
