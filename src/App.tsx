import React, { Component } from 'react';
import './App.scss';
import {Grid} from "./Components/grid";
import {Image, SearchResponse} from './types/API';
import unsplashApi from "./api";
import {Button} from "./Components/button";
import {Nav} from "./Components/nav";

const apiUrl = '/search/photos';

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

  private fetchImages = async (filterInput:string) => {
    const { currentPage } = this.state;
    const axiosConfig = {
      params: {
        query: filterInput,
        page: currentPage
      }
    };
    const response =  await unsplashApi.get<SearchResponse>(apiUrl, axiosConfig);
    const { total, total_pages: totalPages, results: items} =  response.data;
    return { total, totalPages, items};

  };
  private handleSearch = async (searchInput:string) => {
    const responseData = await this.fetchImages(searchInput);
    this.setState(state => ({...state, ...responseData }));
  };

  private loadImages = () => {
    const currentPage = ++this.state.currentPage;
    this.setState(state => ({
        ...state, currentPage
    }), async ()=>{
      const { items } = await this.fetchImages(this.state.searchInput);
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
      <Button className="native-button" type={ButtonTypes.BUTTON} onClick={this.loadImages}>Show more {total ? `(${items.length} of ${total})` : ''}</Button>
    </div>;
  }
}

export default App;
