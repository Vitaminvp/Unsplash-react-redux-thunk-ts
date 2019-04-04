import React, { Component } from 'react';
import axios from "axios";
import './App.scss';
import {SearchForm} from "./Components/searchForm";

const URL = 'https://api.unsplash.com/search/photos?page=1&query=';
const ACCESS_KEY = '&client_id=995142b5e2f546f4eac828d832606dfba0beaef27d62d77a1ff8cce9ba2bacac';

class App extends Component {
  
  onSearch = async (value:string) => {


    const response =  await axios.get(`${URL}${value}${ACCESS_KEY}`);
    console.log("response", response);
  };
  
  render() {
    return (
      <SearchForm onSubmit={this.onSearch}/>
    );
  }
}

export default App;
