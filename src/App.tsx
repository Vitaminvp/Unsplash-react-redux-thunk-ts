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
  value: string;
  searchInput: string;
  filterInput: string;
}
class App extends Component<{}, State> {
  state = {
    items: [],
    total: 0,
    totalPages: 0,
    currentPage: 1,
    value: '',
    searchInput: '',
    filterInput: ''
  };
  private fetchImages = async (value:string) => {
    const { currentPage } = this.state;
    const axiosConfig = {
      params: {
        query: value,
        page: currentPage
      }
    };
    const response =  await unsplashApi.get<SearchResponse>(apiUrl, axiosConfig);
    const { total, total_pages: totalPages, results: items} =  response.data;
    return { total, totalPages, items};

  };
  private handleSearch = async (value:string) => {
    const responseData = await this.fetchImages(value);
    this.setState(state => ({...state, ...responseData, value }));
  };

  private loadImages = () => {
    const currentPage = ++this.state.currentPage;
    this.setState(state => ({
        ...state, currentPage
    }), async ()=>{
      const { items } = await this.fetchImages(this.state.value);
      const updateItems = [...this.state.items, ...items];
      this.setState(state => ({...state, items: updateItems}));
    });
  };

  private onFilter = (value: object) => {
    console.log("value", value);
      this.setState(state => ({...state, ...value}), () => console.log("this.state", this.state));
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
